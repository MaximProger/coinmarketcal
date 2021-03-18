document.addEventListener("DOMContentLoaded", function () {
  // Поиск родителя
  function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  function closeSelects() {
    const selects = document.querySelectorAll(".exchange__select");
    selects.forEach((select) => {
      select.classList.remove("exchange__select--active");
    });
  }

  const selectsHead = document.querySelectorAll(".exchange__select__head");
  if (selectsHead) {
    selectsHead.forEach((selectHead) => {
      selectHead.addEventListener("click", () => {
        const currSelect = selectHead.parentNode;

        if (currSelect.classList.contains("exchange__select--active")) {
          currSelect.classList.remove("exchange__select--active");
        } else {
          closeSelects();
          currSelect.classList.add("exchange__select--active");
        }
      });
    });
  }

  if (selectsHead) {
    document.onclick = function (evt) {
      if (
        evt.target.className != "exchange__select" &&
        !findAncestor(evt.target, "exchange__select")
      ) {
        closeSelects();
      }
    };
  }

  const selectItems = document.querySelectorAll(".exchange__select__item");
  if (selectItems) {
    selectItems.forEach((selectItem) => {
      selectItem.addEventListener("click", () => {
        const currSelect = findAncestor(selectItem, "exchange__select");
        const currSelectHead = currSelect.querySelector(
          ".exchange__select__head"
        );
        currSelectHead.innerHTML = selectItem.innerHTML;
        currSelect.classList.remove("exchange__select--active");
      });
    });
  }

  const openSelect = document.querySelector("#openSelect");
  if (openSelect) {
    openSelect.addEventListener("click", (evt) => {
      evt.preventDefault();
      openSelect.parentNode.classList.toggle("exchange__inner__choose--active");
    });
  }

  // Tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Sort Ranking
  function closeSortItems(sortItems) {
    sortItems.forEach((sortItem) => {
      sortItem.classList.remove("active");
    });
  }

  function closeTableArrows() {
    const tableArrows = document.querySelectorAll(".table__arrow");
    tableArrows.forEach((tableArrow) => {
      tableArrow.classList.remove("active");
    });
  }

  const sortItems = document.querySelectorAll(".sort-item");
  if (sortItems) {
    sortItems.forEach((sortItem) => {
      sortItem.addEventListener("click", (evt) => {
        evt.preventDefault();

        const currArrow = sortItem.querySelector(".table__arrow");
        console.log(currArrow);

        if (sortItem.classList.contains("active")) {
          currArrow.classList.toggle("active");
        } else {
          closeSortItems(sortItems);
          closeTableArrows();
        }

        sortItem.classList.add("active");
      });
    });
  }
});
