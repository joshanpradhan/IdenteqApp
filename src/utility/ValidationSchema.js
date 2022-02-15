import * as Yup from "yup";

//validationf or all auth screen form
export const LoginValidationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().label("Password"),
});

export const ForgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export const CreateNewPasswordValidationSchema = Yup.object().shape({
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(6)
    .max(50)
    .oneOf([Yup.ref("password"), null], "Both passwords must match")
    .label("Confirm Password"),
});

export const ProfileValidationSchema = Yup.object().shape({
  fullName: Yup.string().required().label("Name"),
  street1: Yup.string().required().label("Street 1"),
  state: Yup.string().required().label("State"),
  city: Yup.string().required().label("City"),
  zipCode: Yup.string().required().label("Zip Code"),
});

export const ChangePasswordValidationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required()
    .min(6)
    .max(50)
    .label("Current Password"),
  password: Yup.string().required().min(6).max(50).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(6)
    .max(50)
    .oneOf(
      [Yup.ref("password"), null],
      "Both new password and confirm password must match"
    )
    .label("Confirm Password"),
});

export const CashCheckoutValidationSchema = Yup.object().shape({
  totalAmount: Yup.number()
    .positive()
    .typeError("Target Amount should contain number only")
    .required()
    .label("Target amount"),
  cashReturn: Yup.number()
    .typeError("Cash Return should contain number only")
    .required()
    .label("Cash Return"),
  paymentMethod: Yup.string().required().label("Payment Method"),
  paymentNote: Yup.string().required().min(1).label("Payment Note"),
});

export const CardCheckoutValidationSchema = Yup.object().shape({
  totalAmount: Yup.number()
    .positive()
    .typeError("Target Amount should contain number only")
    .required()
    .label("Target amount"),
  paymentMethod: Yup.string().required().label("Payment Method"),
  paymentNote: Yup.string().required().min(1).label("Payment Note"),
});

export const ChequeCheckoutValidationSchema = Yup.object().shape({
  totalAmount: Yup.number()
    .positive()
    .typeError("Target Amount should contain number only")
    .required()
    .label("Target amount"),
  paymentMethod: Yup.string().required().label("Payment Method"),
  paymentNote: Yup.string().required().min(1).label("Payment Note"),
});

export const AddItemOrderValidationSchema = Yup.object().shape({
  palletName: Yup.string().required().label("Pallet Name"),
  lotNumber: Yup.string().required().label("Lot Number"),
  quantity: Yup.number().required().label("Quantity"),
  weight: Yup.string().required().label("Weight"),
  serialNumber: Yup.string().required().label("Serial Number"),
  barcode: Yup.string().required().label("Barcode"),
});

export const AddCustomerValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().label("Customer Name"),
  phoneNo: Yup.number()
    .positive()
    .typeError("Phone number should contain number only")
    .required()
    .label("Phone Number"),
  billingAddress: Yup.string().label("Billing Address"),
  shippingAddress: Yup.string().label("Shipping Address"),
});

export const AddURLValidation = Yup.object().shape({
 url: Yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Please add valid url!'
        )
        .required('Please add url!'),
});

export const UpdateValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().label("Name"),
  phoneNo: Yup.number()
    .positive()
    .typeError("Phone number should contain number only")
    .required()
    .label("Phone Number"),
});

