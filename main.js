// kacihan di enc
// dikembangkan dan di perbaiki oleh tegarpriyadi

const _0x196fbf = _0x5d22;
(function (_0x38c5b0, _0x39049b) {
    const _0x36a4b6 = _0x5d22,
        _0x26e77b = _0x38c5b0();
    while (!![]) {
        try {
            const _0x457d88 = -parseInt(_0x36a4b6(0x1a1)) / 0x1 + -parseInt(_0x36a4b6(0x1d9)) / 0x2 + parseInt(_0x36a4b6(0x1b5)) / 0x3 + parseInt(_0x36a4b6(0x21d)) / 0x4 * (-parseInt(_0x36a4b6(0x221)) / 0x5) + parseInt(_0x36a4b6(0x1e8)) / 0x6 * (parseInt(_0x36a4b6(0x1d7)) / 0x7) + -parseInt(_0x36a4b6(0x209)) / 0x8 + parseInt(_0x36a4b6(0x1ae)) / 0x9;
            if (_0x457d88 === _0x39049b) break;
            else _0x26e77b['push'](_0x26e77b['shift']());
        } catch (_0x3e101e) {
            _0x26e77b['push'](_0x26e77b['shift']());
        }
    }
}(_0x3425, 0x80a00), process[_0x196fbf(0x206)]['NODE_TLS_REJECT_UNAUTHORIZED'] = '0');
import './config.js';
import _0x1ad3d8, {
    join
} from 'path';
import {
    platform
} from 'process';
import {
    fileURLToPath,
    pathToFileURL
} from 'url';
import {
    createRequire
} from 'module';

function _0x5d22(_0x462b83, _0x24e3e2) {
    const _0x342582 = _0x3425();
    return _0x5d22 = function (_0x5d2266, _0x9edb62) {
        _0x5d2266 = _0x5d2266 - 0x19e;
        let _0x7a4dae = _0x342582[_0x5d2266];
        return _0x7a4dae;
    }, _0x5d22(_0x462b83, _0x24e3e2);
}
global[_0x196fbf(0x20b)] = function filename(_0x499a2a =
    import.meta['url'], _0xcb7ace = platform !== 'win32') {
    const _0x538620 = _0x196fbf;
    return _0xcb7ace ? /file:\/\/\// [_0x538620(0x228)](_0x499a2a) ? fileURLToPath(_0x499a2a) : _0x499a2a : pathToFileURL(_0x499a2a)['toString']();
}, global[_0x196fbf(0x1ad)] = function dirname(_0x45e955) {
    const _0x3ce489 = _0x196fbf;
    return _0x1ad3d8[_0x3ce489(0x202)](global[_0x3ce489(0x20b)](_0x45e955, !![]));
}, global[_0x196fbf(0x20f)] = function require(_0x26f429 =
    import.meta[_0x196fbf(0x22e)]) {
    return createRequire(_0x26f429);
};
import * as _0xa9ab82 from 'ws';
import {
    readdirSync,
    statSync,
    unlinkSync,
    existsSync,
    readFileSync,
    watch
} from 'fs';
import _0x535573 from 'yargs';
import {
    spawn
} from 'child_process';
import _0x423bbe from 'lodash';
import _0x41df23 from 'syntax-error';
import _0x25eb0f from 'chalk';
import {
    tmpdir
} from 'os';
import {
    format
} from 'util';
import _0x1dce65 from 'pino';
import {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion
} from '@adiwajshing/baileys';
import {
    Low,
    JSONFile
} from 'lowdb';
import {
    makeWASocket,
    protoType,
    serialize
} from './lib/simple.js';
import _0x3170b7 from './lib/store2.js';
import {
    mongoDB,
    mongoDBV2
} from './lib/mongoDB.js';
const {
    CONNECTING
} = _0xa9ab82, {
    chain
} = _0x423bbe, PORT = process[_0x196fbf(0x206)]['PORT'] || process[_0x196fbf(0x206)]['SERVER_PORT'] || 0xbb8;
protoType(), serialize(), global['API'] = (_0x404989, _0x2bf36a = '/', _0x3402f6 = {}, _0xb4c42c) => (_0x404989 in global['APIs'] ? global[_0x196fbf(0x21e)][_0x404989] : _0x404989) + _0x2bf36a + (_0x3402f6 || _0xb4c42c ? '?' + new URLSearchParams(Object['entries']({
    ..._0x3402f6,
    ..._0xb4c42c ? {
        [_0xb4c42c]: global[_0x196fbf(0x1d4)][_0x404989 in global[_0x196fbf(0x21e)] ? global[_0x196fbf(0x21e)][_0x404989] : _0x404989]
    } : {}
})) : ''), global['timestamp'] = {
    'start': new Date()
};
const __dirname = global[_0x196fbf(0x1ad)](
    import.meta[_0x196fbf(0x22e)]);
global[_0x196fbf(0x216)] = new Object(_0x535573(process[_0x196fbf(0x203)][_0x196fbf(0x225)](0x2))[_0x196fbf(0x1d2)](![])[_0x196fbf(0x229)]()), global[_0x196fbf(0x21f)] = new RegExp('^[' + (opts[_0x196fbf(0x21f)] || _0x196fbf(0x213))[_0x196fbf(0x1fc)](/[|\\{}()[\]^$+*?.\-\^]/g, _0x196fbf(0x1fe)) + ']'), global['db'] = new Low(/https?:\/\// [_0x196fbf(0x228)](opts['db'] || '') ? new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i [_0x196fbf(0x228)](opts['db']) ? opts[_0x196fbf(0x1b4)] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db']) : new JSONFile((opts['_'][0x0] ? opts['_'][0x0] + '_' : '') + 'database.json')), global['DATABASE'] = global['db'], global[_0x196fbf(0x22d)] = async function loadDatabase() {
    const _0x14162e = _0x196fbf;
    if (db['READ']) return new Promise(_0x15c861 => setInterval(async function () {
        const _0x4d72f0 = _0x5d22;
        !db[_0x4d72f0(0x1b1)] && (clearInterval(this), _0x15c861(db['data'] == null ? global['loadDatabase']() : db[_0x4d72f0(0x1e0)]));
    }, 0x1 * 0x3e8));
    if (db[_0x14162e(0x1e0)] !== null) return;
    db[_0x14162e(0x1b1)] = !![], await db[_0x14162e(0x201)]()[_0x14162e(0x212)](console[_0x14162e(0x226)]), db[_0x14162e(0x1b1)] = null, db[_0x14162e(0x1e0)] = {
        'users': {},
        'chats': {},
        'stats': {},
        'msgs': {},
        'sticker': {},
        'settings': {},
        ...db[_0x14162e(0x1e0)] || {}
    }, global['db']['chain'] = chain(db[_0x14162e(0x1e0)]);
}, loadDatabase(), global[_0x196fbf(0x1bb)] = _0x3170b7[_0x196fbf(0x1e9)]((opts['_'][0x0] || '') + 'sessions');
let {
    state,
    saveCreds
} = await useMultiFileAuthState(_0x1ad3d8['resolve']('./sessions')), {
    version,
    isLatest
} = await fetchLatestBaileysVersion();
console['log'](_0x196fbf(0x1ef) + version['join']('.') + _0x196fbf(0x215) + isLatest);
const connectionOptions = {
    'version': version,
    'printQRInTerminal': !![],
    'auth': state,
    'browser': [_0x196fbf(0x200), _0x196fbf(0x19f), '3.1.0'],
    'patchMessageBeforeSending': _0x49ce2d => {
        const _0x17481f = _0x196fbf,
            _0x245130 = !!(_0x49ce2d['buttonsMessage'] || _0x49ce2d['templateMessage'] || _0x49ce2d[_0x17481f(0x224)]);
        return _0x245130 && (_0x49ce2d = {
            'viewOnceMessage': {
                'message': {
                    'messageContextInfo': {
                        'deviceListMetadataVersion': 0x2,
                        'deviceListMetadata': {}
                    },
                    ..._0x49ce2d
                }
            }
        }), _0x49ce2d;
    }
};
global[_0x196fbf(0x223)] = makeWASocket(connectionOptions), conn[_0x196fbf(0x22c)] = ![];
!opts['test'] && ((await import('./server.js'))[_0x196fbf(0x1ba)](PORT), setInterval(async () => {
    const _0x4613e0 = _0x196fbf;
    if (global['db'][_0x4613e0(0x1e0)]) await global['db'][_0x4613e0(0x1a8)]()['catch'](console[_0x4613e0(0x226)]);
    clearTmp();
}, 0x3c * 0x3e8));

function clearTmp() {
    const _0x6ce5b4 = _0x196fbf,
        _0x5f3964 = [tmpdir(), join(__dirnameGlobal, _0x6ce5b4(0x1f1))],
        _0x44c551 = [];
    return _0x5f3964['forEach'](_0x5eed56 => readdirSync(_0x5eed56)[_0x6ce5b4(0x1cf)](_0x39e8e5 => _0x44c551['push'](join(_0x5eed56, _0x39e8e5)))), _0x44c551[_0x6ce5b4(0x1a5)](_0x37fca0 => {
        const _0x4a28d6 = _0x6ce5b4,
            _0x56bb09 = statSync(_0x37fca0);
        if (_0x56bb09['isFile']() && Date['now']() - _0x56bb09[_0x4a28d6(0x1d1)] >= 0x3e8 * 0x3c * 0x3) return unlinkSync(_0x37fca0);
        return ![];
    });
}

function clearSessions(_0x4c3ba4 = _0x196fbf(0x1e5)) {
    const _0x3f392d = _0x196fbf;
    let _0x5ea52e = [];
    return readdirSync(_0x4c3ba4)[_0x3f392d(0x1cf)](_0x4f39b0 => _0x5ea52e[_0x3f392d(0x1a3)](join(_0x4c3ba4, _0x4f39b0))), _0x5ea52e['map'](_0x459e55 => {
        const _0x108b31 = _0x3f392d;
        let _0x464c0b = statSync(_0x459e55);
        if (_0x464c0b[_0x108b31(0x1d6)]() && Date[_0x108b31(0x1b9)]() - _0x464c0b[_0x108b31(0x1d1)] >= 0x3e8 * 0x3c * 0x78) return console[_0x108b31(0x1bf)](_0x108b31(0x1ac), _0x459e55), unlinkSync(_0x459e55);
        return ![];
    });
}
async function connectionUpdate(_0x5b7063) {
    const _0x1cb17e = _0x196fbf,
        {
            receivedPendingNotifications: _0x3fdf60,
            connection: _0x33a211,
            lastDisconnect: _0x1d91c2,
            isOnline: _0x5aab3a,
            isNewLogin: _0x5f05db
        } = _0x5b7063;
    if (_0x5f05db) conn[_0x1cb17e(0x22c)] = !![];
    if (_0x33a211 == _0x1cb17e(0x1a9)) console[_0x1cb17e(0x1bf)](_0x25eb0f[_0x1cb17e(0x1ca)](_0x1cb17e(0x219)));
    if (_0x33a211 == 'open') console[_0x1cb17e(0x1bf)](_0x25eb0f[_0x1cb17e(0x1eb)](_0x1cb17e(0x1c8)));
    if (_0x5aab3a == !![]) console[_0x1cb17e(0x1bf)](_0x25eb0f[_0x1cb17e(0x1eb)](_0x1cb17e(0x1c3)));
    if (_0x5aab3a == ![]) console[_0x1cb17e(0x1bf)](_0x25eb0f['red'](_0x1cb17e(0x1a6)));
    if (_0x3fdf60) console['log'](_0x25eb0f[_0x1cb17e(0x1fb)](_0x1cb17e(0x1a0)));
    if (_0x33a211 == _0x1cb17e(0x1aa)) console[_0x1cb17e(0x1bf)](_0x25eb0f[_0x1cb17e(0x1dc)](_0x1cb17e(0x1e3)));
    global[_0x1cb17e(0x1f3)][_0x1cb17e(0x1b8)] = new Date();
    _0x1d91c2 && _0x1d91c2[_0x1cb17e(0x226)] && _0x1d91c2[_0x1cb17e(0x226)]['output'] && _0x1d91c2[_0x1cb17e(0x226)][_0x1cb17e(0x1d8)][_0x1cb17e(0x1f6)] !== DisconnectReason['loggedOut'] && conn['ws'][_0x1cb17e(0x1bc)] !== CONNECTING && console[_0x1cb17e(0x1bf)](global[_0x1cb17e(0x1f8)](!![]));
    if (global['db']['data'] == null) await global[_0x1cb17e(0x22d)]();
}
process['on'](_0x196fbf(0x1e2), console[_0x196fbf(0x226)]);
let isInit = !![],
    handler = await import(_0x196fbf(0x1b7));
global['reloadHandler'] = async function (_0x208d4c) {
    const _0x140ed4 = _0x196fbf;
    try {
        const _0x5aaaa1 = await import(_0x140ed4(0x1ed) + Date[_0x140ed4(0x1b9)]())[_0x140ed4(0x212)](console['error']);
        if (Object[_0x140ed4(0x1c7)](_0x5aaaa1 || {})['length']) handler = _0x5aaaa1;
    } catch (_0x4d02fb) {
        console[_0x140ed4(0x226)](_0x4d02fb);
    }
    if (_0x208d4c) {
        const _0xe17356 = global['conn'][_0x140ed4(0x1ee)];
        try {
            global['conn']['ws'][_0x140ed4(0x1aa)]();
        } catch {}
        conn['ev'][_0x140ed4(0x205)](), global['conn'] = makeWASocket(connectionOptions, {
            'chats': _0xe17356
        }), isInit = !![];
    }
    return !isInit && (conn['ev']['off']('messages.upsert', conn['handler']), conn['ev'][_0x140ed4(0x1db)]('group-participants.update', conn[_0x140ed4(0x1cb)]), conn['ev'][_0x140ed4(0x1db)](_0x140ed4(0x1d5), conn['groupsUpdate']), conn['ev'][_0x140ed4(0x1db)](_0x140ed4(0x1a7), conn[_0x140ed4(0x1e6)]), conn['ev'][_0x140ed4(0x1db)]('connection.update', conn[_0x140ed4(0x211)]), conn['ev'][_0x140ed4(0x1db)](_0x140ed4(0x1be), conn[_0x140ed4(0x1ce)])), conn[_0x140ed4(0x1f2)] = _0x140ed4(0x218), conn['bye'] = _0x140ed4(0x1da), conn['spromote'] = _0x140ed4(0x1a2), conn[_0x140ed4(0x1c9)] = _0x140ed4(0x1ea), conn['sDesc'] = _0x140ed4(0x1ff), conn[_0x140ed4(0x1f0)] = 'Nama Grup Telah Diubah Menjadi \x0a@subject', conn[_0x140ed4(0x20e)] = _0x140ed4(0x1fd), conn[_0x140ed4(0x1e7)] = 'Tautan Group Telah Diubah Menjadi \x0a@revoke', conn[_0x140ed4(0x1ab)] = _0x140ed4(0x1dd), conn[_0x140ed4(0x1c1)] = _0x140ed4(0x1c0), conn[_0x140ed4(0x20c)] = _0x140ed4(0x20d), conn[_0x140ed4(0x1e4)] = _0x140ed4(0x1d3), conn['handler'] = handler[_0x140ed4(0x22b)][_0x140ed4(0x222)](global[_0x140ed4(0x223)]), conn[_0x140ed4(0x1cb)] = handler[_0x140ed4(0x1cb)][_0x140ed4(0x222)](global[_0x140ed4(0x223)]), conn[_0x140ed4(0x1b3)] = handler[_0x140ed4(0x1b3)]['bind'](global['conn']), conn['onDelete'] = handler[_0x140ed4(0x220)][_0x140ed4(0x222)](global[_0x140ed4(0x223)]), conn[_0x140ed4(0x211)] = connectionUpdate[_0x140ed4(0x222)](global[_0x140ed4(0x223)]), conn[_0x140ed4(0x1ce)] = saveCreds['bind'](global[_0x140ed4(0x223)]), conn['ev']['on'](_0x140ed4(0x1de), conn[_0x140ed4(0x22b)]), conn['ev']['on'](_0x140ed4(0x1af), conn['participantsUpdate']), conn['ev']['on']('groups.update', conn[_0x140ed4(0x1b3)]), conn['ev']['on']('message.delete', conn[_0x140ed4(0x1e6)]), conn['ev']['on']('connection.update', conn['connectionUpdate']), conn['ev']['on']('creds.update', conn[_0x140ed4(0x1ce)]), isInit = ![], !![];
};
const pluginFolder = global[_0x196fbf(0x1ad)](join(__dirname, _0x196fbf(0x1e1))),
    pluginFilter = _0x10b659 => /\.js$/ [_0x196fbf(0x228)](_0x10b659);
global[_0x196fbf(0x1b2)] = {};
async function filesInit() {
    const _0x56f37d = _0x196fbf;
    for (let _0xf32fd6 of readdirSync(pluginFolder)['filter'](pluginFilter)) {
        try {
            let _0x1defe7 = global['__filename'](join(pluginFolder, _0xf32fd6));
            const _0x470eff = await import(_0x1defe7);
            global[_0x56f37d(0x1b2)][_0xf32fd6] = _0x470eff['default'] || _0x470eff;
        } catch (_0x174053) {
            conn[_0x56f37d(0x208)][_0x56f37d(0x226)](_0x174053), delete global['plugins'][_0xf32fd6];
        }
    }
}
filesInit()[_0x196fbf(0x19e)](_0x328728 => console[_0x196fbf(0x1bf)](Object[_0x196fbf(0x1c7)](global[_0x196fbf(0x1b2)])))[_0x196fbf(0x212)](console[_0x196fbf(0x226)]), global['reload'] = async (_0x4991c1, _0x252246) => {
    const _0x2db9ef = _0x196fbf;
    if (pluginFilter(_0x252246)) {
        let _0x54a407 = global[_0x2db9ef(0x20b)](join(pluginFolder, _0x252246), !![]);
        if (_0x252246 in global[_0x2db9ef(0x1b2)]) {
            if (existsSync(_0x54a407)) conn[_0x2db9ef(0x208)]['info'](_0x2db9ef(0x1a4) + _0x252246 + '\'');
            else return conn['logger']['warn'](_0x2db9ef(0x21b) + _0x252246 + '\''), delete global[_0x2db9ef(0x1b2)][_0x252246];
        } else conn[_0x2db9ef(0x208)]['info'](_0x2db9ef(0x214) + _0x252246 + '\'');
        let _0x130891 = _0x41df23(readFileSync(_0x54a407), _0x252246, {
            'sourceType': 'module',
            'allowAwaitOutsideFunction': !![]
        });
        if (_0x130891) conn['logger']['error'](_0x2db9ef(0x207) + _0x252246 + '\'\x0a' + format(_0x130891));
        else try {
            const _0xd281ec = await import(global[_0x2db9ef(0x20b)](_0x54a407) + _0x2db9ef(0x1f7) + Date[_0x2db9ef(0x1b9)]());
            global['plugins'][_0x252246] = _0xd281ec['default'] || _0xd281ec;
        } catch (_0x597661) {
            conn[_0x2db9ef(0x208)][_0x2db9ef(0x226)](_0x2db9ef(0x21c) + _0x252246 + '\x0a' + format(_0x597661) + '\'');
        } finally {
            global[_0x2db9ef(0x1b2)] = Object[_0x2db9ef(0x20a)](Object[_0x2db9ef(0x227)](global['plugins'])['sort'](([_0x8d5f5b], [_0x9faa0]) => _0x8d5f5b[_0x2db9ef(0x1c6)](_0x9faa0)));
        }
    }
}, Object[_0x196fbf(0x210)](global[_0x196fbf(0x1ec)]), watch(pluginFolder, global[_0x196fbf(0x1ec)]), await global[_0x196fbf(0x1f8)]();
async function _quickTest() {
    const _0x3a882 = _0x196fbf;
    let _0x2019b8 = await Promise['all']([spawn('ffmpeg'), spawn(_0x3a882(0x1bd)), spawn(_0x3a882(0x22a), [_0x3a882(0x1b0), _0x3a882(0x1d0), _0x3a882(0x226), _0x3a882(0x1b6), _0x3a882(0x1f5), _0x3a882(0x1c4), '1', '-f', _0x3a882(0x1f4), '-']), spawn(_0x3a882(0x1f9)), spawn(_0x3a882(0x1df)), spawn('gm'), spawn('find', [_0x3a882(0x217)])][_0x3a882(0x1a5)](_0x2d143a => {
            const _0x563480 = _0x3a882;
            return Promise[_0x563480(0x1cd)]([new Promise(_0x56de85 => {
                const _0x15404b = _0x563480;
                _0x2d143a['on'](_0x15404b(0x1aa), _0x17144c => {
                    _0x56de85(_0x17144c !== 0x7f);
                });
            }), new Promise(_0x17e05c => {
                const _0x4e2848 = _0x563480;
                _0x2d143a['on'](_0x4e2848(0x226), _0x559b83 => _0x17e05c(![]));
            })]);
        })),
        [_0x9f6215, _0x3a3d5c, _0x232d36, _0x5b9f32, _0x1e0638, _0x42c40b, _0x35226e] = _0x2019b8;
    console['log'](_0x2019b8);
    let _0xed442c = global[_0x3a882(0x1c5)] = {
        'ffmpeg': _0x9f6215,
        'ffprobe': _0x3a3d5c,
        'ffmpegWebp': _0x232d36,
        'convert': _0x5b9f32,
        'magick': _0x1e0638,
        'gm': _0x42c40b,
        'find': _0x35226e
    };
    Object[_0x3a882(0x210)](global[_0x3a882(0x1c5)]), !_0xed442c[_0x3a882(0x22a)] && conn[_0x3a882(0x208)][_0x3a882(0x1cc)](_0x3a882(0x1c2)), _0xed442c['ffmpeg'] && !_0xed442c[_0x3a882(0x204)] && conn[_0x3a882(0x208)]['warn']('Sticker Mungkin Tidak Beranimasi tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)'), !_0xed442c['convert'] && !_0xed442c[_0x3a882(0x1df)] && !_0xed442c['gm'] && conn['logger']['warn'](_0x3a882(0x21a));
}

function _0x3425() {
    const _0x416882 = ['sAnnounceOn', 'Deleted sessions', '__dirname', '20901204usRrtf', 'group-participants.update', '-hide_banner', 'READ', 'plugins', 'groupsUpdate', 'mongodbv2', '21279VdGtig', '-filter_complex', './handler.js', 'connect', 'now', 'default', 'authFolder', 'readyState', 'ffprobe', 'creds.update', 'log', 'Group telah di buka!\x0asekarang semua peserta dapat mengirim pesan.', 'sAnnounceOff', 'Silahkan Install ffmpeg Terlebih Dahulu Agar Bisa Mengirim Video', 'Status Aktif', '-frames:v', 'support', 'localeCompare', 'keys', 'Berhasil Tersambung', 'sdemote', 'redBright', 'participantsUpdate', 'warn', 'race', 'credsUpdate', 'forEach', '-loglevel', 'mtimeMs', 'exitProcess', 'Edit Info Grup di ubah ke semua peserta!', 'APIKeys', 'groups.update', 'isFile', '97279RnGREw', 'output', '1459018zKVJUw', 'Selamat Tinggal @user\x0aKami Harap Kamu Akan Kembali Lagi', 'off', 'red', 'Group telah di tutup!\x0asekarang hanya admin yang dapat mengirim pesan.', 'messages.upsert', 'magick', 'data', './plugins/index', 'uncaughtException', '⏱Koneksi Terputus Dan Mencoba Menyambung Kembali...', 'sRestrictOff', 'sessions', 'onDelete', 'sRevoke', '324EmCINT', 'fixFileName', '@user Telah Di Berhentikan Sebagai Admin', 'green', 'reload', './handler.js?update=', 'chats', 'using WA v', 'sSubject', './tmp', 'welcome', 'timestamp', 'webp', 'color', 'statusCode', '?update=', 'reloadHandler', 'convert', '☑️ Quick Test Done , nama file session ~> creds.json', 'yellow', 'replace', 'Foto Grup Telah Diubah!', '\\$&', 'Deskripsi Telah Diubah Menjadi \x0a@desc', 'ZonerBeta - MD', 'read', 'dirname', 'argv', 'ffmpegWebp', 'removeAllListeners', 'env', 'syntax error while loading \'', 'logger', '6152200DaCNNx', 'fromEntries', '__filename', 'sRestrictOn', 'Edit Info Grup di ubah ke hanya admin!', 'sIcon', '__require', 'freeze', 'connectionUpdate', 'catch', '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-', 'requiring new plugin \'', ', isLatest: ', 'opts', '--version', 'Selamat Datang Di @subject\x0aSilahkan Perkenalkan Diri Kamu @user\x0a\x0aDan Jangan Lupa Baca Deskripsi\x0a@desc', 'Mengaktifkan Bot, Mohon tunggu sebentar...', 'Fitur Stiker Mungkin Tidak Bekerja Tanpa imagemagick dan libwebp di ffmpeg belum terinstall (pkg install imagemagick)', 'deleted plugin \'', 'error require plugin \'', '40RfCTCS', 'APIs', 'prefix', 'deleteUpdate', '307435TqYyRe', 'bind', 'conn', 'listMessage', 'slice', 'error', 'entries', 'test', 'parse', 'ffmpeg', 'handler', 'isInit', 'loadDatabase', 'url', 'then', 'Safari', 'Menunggu Pesan Baru', '439635HavHng', '@user Telah Di Promosikan Menjadi Admin', 'push', 're - require plugin \'', 'map', 'Status Mati', 'message.delete', 'write', 'connecting', 'close'];
    _0x3425 = function () {
        return _0x416882;
    };
    return _0x3425();
}
_quickTest()[_0x196fbf(0x19e)](() => conn[_0x196fbf(0x208)]['info'](_0x196fbf(0x1fa)))[_0x196fbf(0x212)](console[_0x196fbf(0x226)]);