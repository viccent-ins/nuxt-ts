import apis from '../libraries/api';
import useVariable from './useVariable';
export default async function uesApp() {
  const refreshToken = async () => {
    await apis.refreshToken();
  };
  // onMounted(() => {
  //   const fifteenMinutes = (store.state.authorisation.expires_in * 2) * 1000 * 20;
  //   if (store.state.auth) {
  //     setInterval(refreshToken, fifteenMinutes);
  //   }
  // });
  // const countDown = ref(10);
  // const countDownTimer =  () => {
  //   if (countDown.value > 0) {
  //     setTimeout(() => {
  //       countDown.value -= 1;
  //       countDownTimer();
  //     }, 1000);
  //   }
  // };
  return {
    // countDown,
  };
}
