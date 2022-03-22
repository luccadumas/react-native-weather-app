import { showMessage } from "react-native-flash-message";

export function customToast(message, type) {
  switch (type) {
    case 'success':
      showMessage({ message: "SUCESSO", description: message, type: "success", icon: type, duration: 6000, floating: true, });
      break;
    case 'error':
      showMessage({ message: "ERRO", description: message, type: "danger", icon: type, duration: 6000, floating: true, });
      break;
    case 'info':
      showMessage({ message: message, type: "info", icon: type, duration: 6000, floating: true, });
      break;
    default:
      break;
  }
}
