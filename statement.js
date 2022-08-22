import createStatementData from './createStatementData.js'

function statement (invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `Statement for ${data.customer}\n`;
    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.totalVolumeCredits} credits\n`;
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
            { 
                style: "currency", 
                currency: "USD",
                minimumFractionDigits: 2 
            }).format(aNumber/100);
}

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const invoices = require('./invoices.json');
const plays = require('./plays.json');
//console.log(Intl.NumberFormat.supportedLocalesOf('en'))
invoices.forEach(invoice => 
    console.log(statement(invoice, plays))
)


