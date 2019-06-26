const Hapi = require('@hapi/hapi');
const {
    superImportantReport,
    superImportantReportBluebird,
    superImportantReportSetImmediate,
    superImportantReportBluedbirdResolve,
    superImportantReportNativeResolve,
    superImportantReportSetTimeout
} = require("./loops");

(async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    server.route({
        path: "/loop",
        method: "GET",
        handler: (request, h) => {
            // Blocks Event Loop
            superImportantReport();
            return "Done!";
        }
    });

    server.route({
        path: "/loop/bmap",
        method: "GET",
        handler: async (request, h) => {
            // Blocks Event Loop
            await superImportantReportBluebird();
            return "Done!";
        }
    });

    server.route({
        path: "/loop/seti",
        method: "GET",
        handler: async (request, h) => {
            // Does NOT Blocks Event Loop
            await superImportantReportSetImmediate();
            return "Done!";
        }
    });

    server.route({
        path: "/loop/bird",
        method: "GET",
        handler: async (request, h) => {
            // Does NOT Blocks Event Loop
            await superImportantReportBluedbirdResolve();
            return "Done!";
        }
    });

    server.route({
        path: "/loop/native",
        method: "GET",
        handler: async (request, h) => {
            // Blocks Event Loop
            await superImportantReportNativeResolve();
            return "Done!";
        }
    });

    server.route({
        path: "/loop/sett",
        method: "GET",
        handler: async (request, h) => {
            // Does NOT Blocks Event Loop - but super slow...
            await superImportantReportSetTimeout();
            return "Done!";
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
})();
