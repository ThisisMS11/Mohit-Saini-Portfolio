'use client';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const ResumeViewer = () => {
  return (
    <Accordion type="single" collapsible className="mx-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-md font-semibold  hover:no-underline py-2 px-4 rounded-lg   hover:bg-gray-200 dark:hover:bg-gray-900 focus:outline-none ">
          Mohit&#39;s Resume
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-xl bg-white shadow-xl rounded-xl overflow-hidden p-4 dark:shadow-2xl dark:shadow-primary/40">
              <div className="flex justify-center">
                <Document file="/Mohit_Saini_Resume.pdf">
                  <Page
                    pageNumber={1}
                    className="w-auto"
                    renderMode="canvas"
                    scale={0.9}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ResumeViewer;
