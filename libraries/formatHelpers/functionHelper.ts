import moment from 'moment';
const functionHelper = {
    dateStringTo12Hour( dateString: string, formatString = 'DD-MM-YYYY hh:mm a'): string {
        const date = new Date( dateString,  );
        return moment(dateString).format(formatString);
    },
    dateStringTo24Hour( dateString: string, formatString = 'DD-MM-YYYY HH:MM a' ): string {
        const date = new Date( dateString,  );
        return moment(dateString).format(formatString);
    },
    getNumberKey (e)  {
        if (e.charCode === 0 || /\d/.test(String.fromCharCode(e.charCode))) {
            return true
        } else {
            e.preventDefault();
        }
    },
    getAmountOfCount(amount: string, amountText= ''): string {
        return `${amount} ${amountText}`;
    },
    getAmountOfKg(amount: string, amountText = '0'): string {
        return `${amount + amountText} `;
    },
}
export default functionHelper;
