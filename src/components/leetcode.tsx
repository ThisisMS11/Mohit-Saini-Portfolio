'use client';
import { useEffect, useState, useCallback } from 'react';
import { Activity, ActivityCalendar } from 'react-activity-calendar';

type LeetCodeGraphProps = {
  username: string;
  blockMargin?: number;
  colorPallete?: string[];
};

async function fetchLeetCodeData(username: string): Promise<Activity[]> {
  const response = await fetch(
    `https://leetcode-stats-api.herokuapp.com/${username}`,
  );
  const responseBody = await response.json();

  if (!response.ok) {
    throw Error('Erroring fetching data');
  }
  return responseBody;
}

export default function LeetCodeHeatmap({
  username,
  blockMargin,
  colorPallete,
}: LeetCodeGraphProps) {
  const [heatmapData, setHeatmapData] = useState<Activity[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchLeetCodeData(username);
      console.log({ data });

      const calendarData = Object.entries(
        // @ts-ignore
        data.submissionCalendar,
      ).map(([timestamp, count]) => {
        const date = new Date(parseInt(timestamp) * 1000)
          .toISOString()
          .split('T')[0];
        const level = Math.min(4, Math.floor(count as number));

        return {
          date: date,
          count: count as number,
          level: level,
        };
      });

      setHeatmapData(calendarData);
    } catch (error) {
      console.error('Failed to fetch heatmap data:', error);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, []);

  const label = {
    totalCount: `{{count}} Submissions in the year`,
  };

  return (
    <>
      {heatmapData && heatmapData.length > 0 ? (
        <ActivityCalendar
          data={heatmapData}
          maxLevel={4}
          blockMargin={blockMargin ?? 2}
          theme={{
            dark: colorPallete ?? [
              '#202020',
              '#9be9a8',
              '#40c463',
              '#30a14e',
              '#216e39',
            ],
          }}
          labels={label}
        />
      ) : (
        <p>Loading heatmap...</p>
      )}
    </>
  );
}
