import removeStopwords from "./removeStopwords";
import selectAmount from "./selectAmount";

const regexBPJS = new RegExp(/(.*bayar bpjs.*|.*tagihan bpjs.*)/ig);
const regexPLN = new RegExp(/(.*tagihan listrik.*|.*token listrik.*|.*pln.*)/ig);
const regexPulsa = new RegExp(/(.*pulsa*.)/ig);
const regexPaketData = new RegExp(/(.*paket data.*)/ig);
const regexFlightSchedule = new RegExp(/(.*tiket pesawat.*)|(.*tiket garuda.*)|(.*air asia.*)|(.*lion air.*)|(.*citilink.*)/ig);
const regexTrainSchedule = new RegExp(/(.*tiket kereta.*)|(.*tiket kai.*)|(.*naik kereta.*)|(.*kereta api.*)|(.*taksaka.*)|(.*argolawu.*)|(.*malabar.*)|(.*argodwipangga.*)/ig);
const regexEmoney = new RegExp(/(.*emoney.*)|(.*e-money.*)|(.*uang elektronik.*)|(.*flazz.*)|(.*kartu tol.*)/ig);
const regexInstallment = new RegExp(/(.*bayar cicilan.*)|(.*pinjaman.*)|(.*bayar agsuran.*)/ig);
const regexPBB = new RegExp(/(.*pbb.*)|(.*pajak bumi bangunan.*)|(.*pajak bumi dan bangunan.*)/ig);
const regexVoucherGame = new RegExp(/(.*cash pb.*)|(.*point blank.*)|(.*genshin impact.*)|(.*genshin.*)|(.*steam wallet.*)|(.*mole.*)|(.*mobile legend.*)|(.*genshin.*)|(.*voucher game.*)/ig);
const regexTransactionHistory = new RegExp(/(.*lihat transaksi.*)|(.*riwayat transaksi.*)|(.*lihat pembayaran.*)/ig);
const regexWishlist = new RegExp(/(.*wishlist.*)/ig);
const regexPromo = new RegExp(/(.*promo.*)/ig);

const textProcessing = (string) => {
	if (window.location.pathname === '/pulsa-page') {
		selectAmount(string)
		return
	}

	if (window.location.pathname === '/checkout') {
		const yes = new RegExp(/(.*yes.*)|(.*boleh.*)|(.*ya.*)/ig);

		if (yes.test(string)) window.location.assign('/payment')
		return
	}

	if (window.location.pathname === '/payment') {
		const no = new RegExp(/(.*tidak.*)|(.*nanti deh.*)|(.*jangan dulu.*)|(.*engga*)|(.*enggak*)/ig);
		const yes = new RegExp(/(.*yes.*)|(.*boleh.*)|(.*ya.*)/ig);

		if (no.test(string)) {
			const synth = window.speechSynthesis;
			const utterThis = new SpeechSynthesisUtterance('Baik, kita akan menyiapkan pembayaran kamu, sebentar ya');
			utterThis.lang = "id";

			synth.speak(utterThis);
			utterThis.onend = () => {
				setTimeout(() => {
					window.location.assign('/thank-you')
				}, 2000);
			}
		}

		if (yes.test(string)) window.location.assign('/choose-payment')

		return
	}

	if (window.location.pathname === '/choose-payment') {
		const synth = window.speechSynthesis;
		const utterThis = new SpeechSynthesisUtterance(`Pembayaran dengan metode ${string}, akan kita teruskan, sebentar ya`);
		utterThis.lang = "id";

		synth.speak(utterThis);
		utterThis.onend = () => {
			utterThis.onend = () => {
				setTimeout(() => {
					window.location.assign('/thank-you')
				}, 2000);
			}
		}

		return
	}

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
	} else if (regexTransactionHistory.test(string)) {
		window.location.assign('https://www.tokopedia.com/order-list');
	} else if (regexWishlist.test(string)) {
		window.location.assign('https://www.tokopedia.com/wishlist');
	} else if (regexPromo.test(string)) {
		window.location.assign('https://www.tokopedia.com/promo/');
	} else {
			const sanitizedText = removeStopwords(string);
		// if input doesn't recognize, default state will redirect user to search page
			window.location.assign(`https://www.tokopedia.com/search?st=product&q=${sanitizedText}`);
	}
};

export default textProcessing;
