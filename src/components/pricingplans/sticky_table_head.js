window.addEventListener("load", (event) => {
  const body = document.body;
  const firstSection = document.querySelector(".table-above-section");
  const lastSection = document.querySelector(".table-below-section");
  const table = document.querySelector("table#pricingTable");
  const thead = document.querySelector("table#pricingTable thead");
  const mq = window.matchMedia("(min-width: 780px)");
  const stickyClass = "sticky-table";
  const sticky2Class = "sticky2-table";
  let tableWidth = 0,
    tableOffsetTop = 0,
    theadHeight = 0;

  if (table) {
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);
  }

  function scrollHandler() {
    tableWidth = table.offsetWidth;
    tableOffsetTop = table.getBoundingClientRect().top;
    // or
    //let tableOffsetTop = table.offsetTop;
    theadHeight = thead.offsetHeight;

    if (mq.matches) {
      const scrollY = window.pageYOffset;
      const lastSectionOffsetTop = lastSection.getBoundingClientRect().top;

      if (tableOffsetTop <= 0) {
        if (lastSectionOffsetTop > theadHeight) {
          thead.style.width = `${tableWidth + 30}px`;
          body.classList.remove(sticky2Class);
          body.classList.add(stickyClass);
          thead.style.top = 0;
          body.style.paddingTop = `${theadHeight}px`;
        } else {
          thead.style.width = `${tableWidth}px`;
          body.classList.remove(stickyClass);
          body.classList.add(sticky2Class);
          thead.style.top = `calc(100% - ${theadHeight}px)`;
        }
      } else {
        if (tableOffsetTop > theadHeight) {
          thead.style.width = `${tableWidth}px`;
          body.classList.remove(stickyClass, sticky2Class);
          body.style.paddingTop = 0;
          thead.style.width = "100%";
          thead.style.top = "auto";
        }
      }
    }
  }

  function resizeHandler() {
    if (mq.matches) {
      tableWidth = table.offsetWidth;
      tableOffsetTop = firstSection.offsetHeight;
      theadHeight = thead.offsetHeight;
    } else {
      body.classList.remove(stickyClass, sticky2Class);
      body.style.paddingTop = 0;
      thead.style.width = "100%";
      thead.style.top = "auto";
    }
  }
});