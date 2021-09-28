import refs from '../refs';

// refs.paymentMethodForm[0].addEventListener('input', e => {
//   const actualError = [...refs.errors].find(
//     error => error.previousElementSibling === e.target,
//   );

//   if (!actualError) {
//     return;
//   } else {
//     if (e.target.validity.valid) {
//       actualError.textContent = '';
//     } else {
//       actualError.textContent = 'Please enter your name using only letters';
//     }
//   }
// });

// refs.cardForm.addEventListener('input', e => {
//   const actualError = [...refs.errors].find(
//     error => error.previousElementSibling === e.target,
//   );

//   if (!actualError) {
//     return;
//   } else {
//     if (e.target.validity.valid) {
//       actualError.textContent = '';
//     } else {
//       actualError.textContent = 'Please enter name on card using only letters';
//     }
//   }
// });

// refs.transferForm.addEventListener('input', e => {
//   const actualError = [...refs.errors].find(
//     error => error.previousElementSibling === e.target,
//   );

//   if (!actualError) {
//     return;
//   } else {
//     if (e.target.validity.valid) {
//       actualError.textContent = '';
//     } else {
//       actualError.textContent =
//         'Please enter name of receiver using only letters';
//     }
//   }
// });
// refs.paypalForm.addEventListener('input', e => {
//   const actualError = [...refs.errors].find(
//     error => error.previousElementSibling === e.target,
//   );

//   if (!actualError) {
//     return;
//   } else {
//     if (e.target.validity.valid) {
//       actualError.textContent = '';
//     } else {
//       actualError.textContent =
//         'Please enter name of receiver using only letters';
//     }
//   }
// });

const enableSubmitBtn = () => {
  const invalidInputBuyer = [...refs.buyerFormInput].find(
    item => !item.validity.valid,
  );
  const invalidInputCard = [...refs.cardInput].find(
    item => !item.validity.valid,
  );
  const invalidInputTransfer = [...refs.transferInput].find(
    item => !item.validity.valid,
  );
  const invalidInputPaypal = [...refs.paypalInput].find(
    item => !item.validity.valid,
  );

  const validCard = !invalidInputBuyer && !invalidInputCard;
  const validBank = !invalidInputBuyer && !invalidInputTransfer;
  const validPaypal =
    !invalidInputBuyer && !invalidInputPaypal && refs.agreeCheckbox.checked;

  if (validCard || validBank || validPaypal) {
    refs.submitBtn.removeAttribute('disabled');
  } else {
    refs.submitBtn.setAttribute('disabled', true);
  }
};

const errorShowFn = (e, message) => {
  const actualError = [...refs.errors].find(
    error => error.previousElementSibling === e.target,
  );

  if (!actualError) {
    return;
  } else {
    if (e.target.validity.valid) {
      actualError.textContent = '';
    } else {
      actualError.textContent = message;
    }
  }
};

export { enableSubmitBtn, errorShowFn };
