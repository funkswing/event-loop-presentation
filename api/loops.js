const _ = require("lodash");
const Bluebird = require("bluebird");
const data = require("./MOCK_DATA_100000.json");

function formatData(doc, count) {
    const formattedDoc = _.get(doc, "_source");
    formattedDoc.ts = new Date();
    formattedDoc.count = count;

    return formattedDoc;
}

function superImportantReport() {
    let count = 0;
    return data.map((doc) => {
        count++;

        const formattedDoc = formatData(doc, count);
        logger(formattedDoc, "js-map");
    });
}

function superImportantReportBluebird() {
    let count = 0;
    return Bluebird.map(data, (doc) => {
        count++;

        const formattedDoc = formatData(doc, count);
        logger(formattedDoc, "bluebird-map");
    }).then(() => {
        return "fin";
    });
}

async function superImportantReportSetImmediate() {
    function setImmediatePromise() {
        return new Promise((resolve) => {
            setImmediate(() => resolve());
        });
    }

    let count = 0;

    for (let i = 0; i < data.length; i++) {
        count++;

        const formattedDoc = formatData(data[i], count);
        logger(formattedDoc, "setImmediate");

        await setImmediatePromise();
    }
}

async function superImportantReportBluedbirdResolve() {
    let count = 0;

    for (const d of data) {
        count++;

        const formattedDoc = formatData(d, count);
        logger(formattedDoc, "bluebird-resolve");

        await Bluebird.resolve();
    }
}

async function superImportantReportNativeResolve() {
    let count = 0;

    for (const d of data) {
        count++;

        const formattedDoc = formatData(d, count);
        logger(formattedDoc, "native-resolve");

        await Promise.resolve();
    }
}

async function superImportantReportSetTimeout() {
    function setTimeOutPromise() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), 0); // NOTE: setTimeout(, 0) === setTimeout(, 1)
        });
    }

    let count = 0;

    for (const d of data) {
        count++;

        const formattedDoc = formatData(d, count);
        logger(formattedDoc, "native-resolve");

        await setTimeOutPromise();
    }
}

module.exports = {
    superImportantReport,
    superImportantReportBluebird,
    superImportantReportSetImmediate,
    superImportantReportBluedbirdResolve,
    superImportantReportNativeResolve,
    superImportantReportSetTimeout
};

function logger(output, loop) {
    const { count, id, ts } = output;
    console.log(
        JSON.stringify({
            loop,
            count,
            id,
            ts
        })
    );
}
