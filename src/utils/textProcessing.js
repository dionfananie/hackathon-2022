import removeStopwords from "./removeStopwords";

const regexBPJS = new RegExp(/(.*bayar bpjs.*|.*tagihan bpjs.*)/ig);
const regexPLN = new RegExp(/(.*tagihan listrik.*|.*token listrik.*|.*pln.*|.*pulsa listrik.*)/ig);
const regexPulsa = new RegExp(/(.*beli pulsa.*|.*pulsa telkomsel.*|.*pulsa xl.*|.*pulsa indosat.*|.*pulsa simpati.*)/ig);
const regexPaketData = new RegExp(/(.*paket data.*)/ig);
const regexFlightSchedule = new RegExp(/(.*tiket pesawat.*)|(.*tiket garuda.*)|(.*air asia.*)|(.*lion air.*)|(.*citilink.*)/ig);
const regexTrainSchedule = new RegExp(/(.*tiket kereta.*)|(.*tiket kai.*)|(.*naik kereta.*)|(.*kereta api.*)|(.*taksaka.*)|(.*argolawu.*)|(.*malabar.*)|(.*argodwipangga.*)/ig);
const regexEmoney = new RegExp(/(.*emoney.*)|(.*e-money.*)|(.*uang elektronik.*)|(.*flazz.*)|(.*kartu tol.*)/ig);
const regexInstallment = new RegExp(/(.*bayar cicilan.*)|(.*pinjaman.*)|(.*bayar agsuran.*)/ig);
const regexPBB = new RegExp(/(.*pbb.*)|(.*pajak bumi bangunan.*)|(.*pajak bumi dan bangunan.*)/ig);
const regexVoucherGame = new RegExp(/(.*cash pb.*)|(.*point blank.*)|(.*genshin impact.*)|(.*genshin.*)|(.*steam wallet.*)|(.*mole.*)|(.*mobile legend.*)|(.*genshin.*)|(.*voucher game.*)/ig);

const textProcessing = (string) => {
	if (regexBPJS.test(string)) {
		window.location.assign('https://www.tokopedia.com/tagihan/bpjs-kesehatan/');
	} else if (regexPLN.test(string)) {
		window.location.assign('https://www.tokopedia.com/pln/');
	} else if (regexPulsa.test(string)) {
    window.location.assign('/pulsa-page'); // redirect to our internal route
	} else if (regexPaketData.test(string)) {
    window.location.assign('https://www.tokopedia.com/paket-data/');
	} else if (regexFlightSchedule.test(string)) {
    window.location.assign('https://www.tokopedia.com/flight/');
	} else if (regexTrainSchedule.test(string)) {
    window.location.assign('https://tiket.tokopedia.com/kereta-api/');
	} else if (regexEmoney.test(string)) {
    window.location.assign('https://www.tokopedia.com/top-up/emoney/');
	} else if (regexInstallment.test(string)) {
    window.location.assign('https://www.tokopedia.com/angsuran/');
	} else if (regexPBB.test(string)) {
    window.location.assign('https://www.tokopedia.com/pajak/pbb/');
	} else if (regexVoucherGame.test(string)) {
    window.location.assign('https://www.tokopedia.com/voucher-game/');
  } else {
		const sanitizedText = removeStopwords(string);
    // if input doesn't recognize, default state will redirect user to search page
		window.location.assign(`https://www.tokopedia.com/search?st=product&q=${sanitizedText}`);
  }
};

export default textProcessing;