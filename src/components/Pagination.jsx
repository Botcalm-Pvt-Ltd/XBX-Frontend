import { useCallback, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Button2({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-6 h-6 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-xl bg-gray-800
      ${
        active
          ? "bg-gray-500 text-white 4xl:text-2xl rounded-3xl"
          : "text-gray-400  4xl:text-2xl "
      }
      ${
        !disabled
          ? "bg-transparent hover:bg-gray-500 hover:text-white"
          : "cursor-not-allowed"
      }
      4xl:text-4xl 4xl:px-10`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
function Button3({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 4xl:w-20 4xl:h-20 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-xl bg-gray-800
     text-white gradient-border 4xl:mx-10`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
function Button4({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 4xl:w-20 4xl:h-20 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-xl px-8 bg-gray-800
      ${
        active
          ? "bg-gray-600 bg-opacity-50 text-white 4xl:text-2xl"
          : "text-gray-400 4xl:text-2xl "
      }
      ${
        !disabled
          ? "bg-gray-600 bg-opacity-50 hover:text-white"
          : "cursor-not-allowed"
      }
      gradient-border 4xl:text-4xl 4xl:px-24 4xl:py-8 4xl:mx-5`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 4;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);

  const handleBackClick = () => {
    const newPageIndex = Math.max(0, pageIndex - 1);
    gotoPage(newPageIndex);
  };

  const handleForwardClick = () => {
    const newPageIndex = Math.min(pageCount - 1, pageIndex + 1);
    gotoPage(newPageIndex);
  };

  return (
    <ul className="flex gap-2">
      <li>
        <Button4
          content={"First"}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
      </li>
      <li>
        <Button3
          content={<IoIosArrowBack className="4xl:w-10 4xl:h-10"/>}
          onClick={handleBackClick}
          disabled={!canPreviousPage}
        />
      </li>
      <div className="flex bg-gray-800 rounded-xl items-center justify-center px-2 gradient-border ring-1 ring-white 4xl:px-24">
        {renderPageLinks()}
      </div>
      <li>
        <Button3
          content={<IoIosArrowForward className="4xl:w-10 4xl:h-10"/>}
          onClick={handleForwardClick}
          disabled={!canNextPage}
        />
      </li>
      <li>
        <Button4
          content={"Last"}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}

function PaginationNav1Presentation() {
  const [pageIndex, setPageIndex] = useState(0);
  const pageCount = 10;
  return (
    <div className="flex gap-3 flex-wrap p-6 py-5">
      <PaginationNav1
        gotoPage={setPageIndex}
        canPreviousPage={pageIndex > 0}
        canNextPage={pageIndex < pageCount - 1}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  );
}

export { PaginationNav1Presentation };
