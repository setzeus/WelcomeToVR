const rewire = require("rewire")
const client = rewire("./client")
const init = client.__get__("init")
// @ponicode
describe("init", () => {
    test("0", () => {
        let param3 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            init("XCode", "Ronald Keeling", param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param3 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            init("png.mpg4", "Becky Bednar", param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param3 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            init("png.mpg4", "Janet Homenick", param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param3 = [true, ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            init("services_recontextualize_front_end.gif", "Janet Homenick", param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param3 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            init("Safari", "Becky Bednar", param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            init(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
