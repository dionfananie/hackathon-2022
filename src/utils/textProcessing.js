const regexBPJS = new RegExp(/(.*bayar bpjs.*|.*tagihan bpjs.*)/g);
const regexPLN = new RegExp(/(.*tagihan listrik.*|.*token listrik.*|.*pln.*|.*pulsa listrik.*)/g);
const regexPulsa = new RegExp(/(.*beli pulsa.*|.*pulsa telkomsel.*|.*pulsa xl.*|.*pulsa indosat.*|.*pulsa simpati.*)/g);
const regexPaketData = new RegExp(/(.*paket data.*)/g);
const regexFlightSchedule = new RegExp(/(.*tiket pesawat.*)|(.*tiket garuda.*)|(.*air asia.*)|(.*lion air.*)|(.*citilink.*)/g);
const regexTrainSchedule = new RegExp(/(.*tiket kereta.*)|(.*tiket kai.*)|(.*naik kereta.*)|(.*kereta api.*)|(.*taksaka.*)|(.*argolawu.*)|(.*malabar.*)|(.*argodwipangga.*)/g);
const regexEmoney = new RegExp(/(.*emoney.*)|(.*e-money.*)|(.*uang elektronik.*)|(.*flazz.*)|(.*kartu tol.*)/g);
const regexInstallment = new RegExp(/(.*bayar cicilan.*)|(.*pinjaman.*)|(.*bayar agsuran.*)/g);
const regexPBB = new RegExp(/(.*pbb.*)|(.*pajak bumi bangunan.*)|(.*pajak bumi dan bangunan.*)/g);
const regexVoucherGame = new RegExp(/(.*cash pb.*)|(.*point blank.*)|(.*genshin impact.*)|(.*genshin.*)|(.*steam wallet.*)|(.*mole.*)|(.*mobile legend.*)|(.*genshin.*)|(.*voucher game.*)/g);

const textProcessing = (string) => {
  if (string.test(regexBPJS)) {
    window.location.assign('https://www.tokopedia.com/tagihan/bpjs-kesehatan/');
  } else if (string.test(regexPLN)) {
    window.location.assign('https://www.tokopedia.com/pln/');
  } else if (string.test(regexPulsa)) {
    window.location.assign('https://www.tokopedia.com/pulsa/');
  } else if (string.test(regexPaketData)) {
    window.location.assign('https://www.tokopedia.com/paket-data/');
  } else if (string.test(regexFlightSchedule)) {
    window.location.assign('https://www.tokopedia.com/flight/');
  } else if (string.test(regexTrainSchedule)) {
    window.location.assign('https://tiket.tokopedia.com/kereta-api/');
  } else if (string.test(regexEmoney)) {
    window.location.assign('https://www.tokopedia.com/top-up/emoney/');
  } else if (string.test(regexInstallment)) {
    window.location.assign('https://www.tokopedia.com/angsuran/');
  } else if (string.test(regexPBB)) {
    window.location.assign('https://www.tokopedia.com/pajak/pbb/');
  } else if (string.test(regexVoucherGame)) {
    window.location.assign('https://www.tokopedia.com/voucher-game/');
  } else {
    // if input doesn't recognize, default state will redirect user to search page
    window.location.assign(`https://www.tokopedia.com/search?st=product&q=${string}`);
  }
};

export default textProcessing;