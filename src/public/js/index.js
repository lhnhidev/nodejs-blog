const selectAllItemBoxs = document.querySelector('#selectAllItemBoxs');
const listSelectItemBoxs = document.querySelectorAll('.select-item-box');
const inputGroupSelect = document.querySelector('#inputGroupSelect');
const btnSubmitAction = document.querySelector('#btnSubmitAction');
console.log(btnSubmitAction, inputGroupSelect);

const setDisabledBtnAction = () => {
  if (inputGroupSelect.value != 'Chọn' && inputGroupSelect.disabled === false) {
    btnSubmitAction.disabled = false;
  } else {
    btnSubmitAction.disabled = true;
  }
};

selectAllItemBoxs.addEventListener('change', () => {
  const isChecked = selectAllItemBoxs.checked;
  inputGroupSelect.disabled = !isChecked;
  listSelectItemBoxs.forEach((item) => (item.checked = isChecked));
  setDisabledBtnAction();
});

listSelectItemBoxs.forEach((item) => {
  item.addEventListener('click', () => {
    const listCheckedItemBox = [...listSelectItemBoxs].filter((item) => {
      setDisabledBtnAction();
      return item.checked === true;
    });

    inputGroupSelect.disabled = listCheckedItemBox.length === 0;

    if (listSelectItemBoxs.length === listCheckedItemBox.length) {
      selectAllItemBoxs.checked = true;
    } else {
      selectAllItemBoxs.checked = false;
    }
    // setDisabledBtnAction();
  });
});

inputGroupSelect.addEventListener('change', () => {
  setDisabledBtnAction();
});
