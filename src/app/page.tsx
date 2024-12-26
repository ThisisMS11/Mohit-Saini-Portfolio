'use client';
import ProofofWork from '@/components/proof-of-work';
import Top from '@/components/top';
import WorkExperience from '@/components/work-exp';
import Education from '@/components/Education';
import ResumeViewer from '@/components/resume-viewer';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Home() {
  return (
    <div className="">
      <Top />
      <Education />
      <WorkExperience />
      <ProofofWork />
      <ResumeViewer />
    </div>
  );
}
