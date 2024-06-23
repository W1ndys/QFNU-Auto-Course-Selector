// ==UserScript==
// @name         曲阜师范大学自动抢课脚本
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      1.0
// @description  曲阜师范大学自动抢课脚本，仅供学习交流使用，请勿用于商业用途。
// @author       https://w1ndys.top/（原作者seven）
// @match        http://202.194.188.38/jsxsd/xsxk/*
// ==/UserScript==

// 免责声明和用户协议
// ===========================================================================================================================================================================================
// 免责声明
// 本脚本仅供学习和交流之用，使用者应在遵守相关法律法规和学校规定的前提下使用。曲阜师范大学及其相关部门不对因使用本脚本而产生的任何直接或间接损失负责。使用者需自行承担使用本脚本所带来的全部风险。
// 在使用本脚本前，请确保已经获得相关权限。如果因未经授权使用本脚本而导致账号被封禁、数据丢失或其他不良后果，开发者不承担任何责任。

// 用户协议
// 1. 接受条款：通过安装和使用本脚本，您即表示您同意遵守以下条款和条件。如果您不同意这些条款，请勿使用本脚本。
// 2. 使用权限：本脚本仅供曲阜师范大学的学生在合法、合规的前提下使用，用于课程选择辅助。您不得将本脚本用于任何非法目的或违反学校规定的用途。
// 3. 责任限制：本脚本按“原样”提供，不保证其适用于任何特定用途或满足您的需求。因使用本脚本而导致的任何直接或间接损失，开发者不承担任何责任，包括但不限于数据丢失、账号封禁等。
// 4. 隐私保护：本脚本不会收集、存储或传输您的任何个人信息。所有操作均在本地执行，数据安全由用户自行负责。
// 5. 脚本更新与维护：开发者有权在任何时间修改、更新或停止维护本脚本，恕不另行通知。用户应自行关注相关更新信息，并决定是否继续使用本脚本。
// 6. 终止：如您违反本协议的任何条款，开发者有权随时终止您使用本脚本的权限，无需另行通知。终止后，您应立即停止使用并删除本脚本的所有副本。
// 7. 适用法律：本协议适用中华人民共和国的法律。因本协议产生的任何争议，双方应友好协商解决；协商不成的，任何一方均可向开发者所在地有管辖权的法院提起诉讼。

// 请您在使用本脚本前，仔细阅读并理解以上免责声明和用户协议内容。如果有任何疑问，请停止使用本脚本并联系开发者进行咨询。
// ===========================================================================================================================================================================================

function sleep(d) {
    for (var t = Data.now(); Data.now() - t <= d;);
}

function bxqjhxk(jx0404id, kcid, cfbs) {
    // 本学期计划选课
    $.ajax({
        url: "/jsxsd/xsxkkc/iscx",
        data: { jx0404id: jx0404id, kcid: kcid },
        async: false,
    });
    var xkzy = "";
    var trjf = "";
    var yxjx0404id = "";
    var yxcfbs = "";
    var param = "?kcid=" + kcid + "&cfbs=" + cfbs;
    sleep(200);
    $.ajax({
        cache: false,
        url: "/jsxsd/xsxkkc/bxqjhxkOper" + param,
        data: { jx0404id: jx0404id, xkzy: xkzy, trjf: trjf },
        async: false,
    });
}

function knjxk(jx0404id, kcid, cfbs) {
    // 跨年级选课
    $.ajax({
        url: "/jsxsd/xsxkkc/iscx",
        data: { jx0404id: jx0404id, kcid: kcid },
        async: false,
    });
    var xkzy = "";
    var trjf = "";
    var yxjx0404id = "";
    var yxcfbs = "";
    var param = "?kcid=" + kcid + "&cfbs=" + cfbs;
    sleep(200);
    $.ajax({
        cache: false,
        url: "/jsxsd/xsxkkc/knjxkOper" + param,
        data: { jx0404id: jx0404id, xkzy: xkzy, trjf: trjf },
        async: false,
    });
}

function ggxxkxk(jx0404id, kcid, cfbs) {
    // 公选课选课
    $.ajax({
        url: "/jsxsd/xsxkkc/iscx",
        data: { jx0404id: jx0404id, kcid: kcid },
        async: false,
    });
    var xkzy = "";
    var trjf = "";
    var yxjx0404id = "";
    var yxcfbs = "";
    var param = "?kcid=" + kcid + "&cfbs=" + cfbs;
    sleep(200);
    $.ajax({
        cache: false,
        url: "/jsxsd/xsxkkc/ggxxkxkOper" + param,
        data: { jx0404id: jx0404id, xkzy: xkzy, trjf: trjf },
        async: false,
    });
}

function xxxk(jx0404id, kcid, cfbs) {
    // 选修选课
    $.ajax({
        url: "/jsxsd/xsxkkc/iscx",
        data: { jx0404id: jx0404id, kcid: kcid },
        async: false,
    });
    var xkzy = "";
    var trjf = "";
    var yxjx0404id = "";
    var yxcfbs = "";
    var param = "?kcid=" + kcid + "&cfbs=" + cfbs;
    sleep(200);
    $.ajax({
        cache: false,
        url: "/jsxsd/xsxkkc/xxxkOper" + param,
        data: { jx0404id: jx0404id, xkzy: xkzy, trjf: trjf },
        async: false,
    });
}

function main() {
    // 选课类型
    var jx0404id = "2021-2022-2"; // 本学期计划选课
    var kcid = "010101"; // 课程代码
    var cfbs = "null"; // 选课类型

    // 选课操作
    bxqjhxk(jx0404id, kcid, cfbs);
    // knjxk(jx0404id, kcid, cfbs);
    // ggxxkxk(jx0404id, kcid, cfbs);
    // xxxk(jx0404id, kcid, cfbs);
}


main();

