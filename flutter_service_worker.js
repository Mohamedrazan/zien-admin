'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f3f3f2804100dd13fbf22ebfa6dd0b76",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3b7a4191e3bac88afb4d4a0d8ce8c08b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d25d70c8ee8b7f23aa4ebaa3da8b1c61",
".git/logs/refs/heads/main": "cfdad11c71080dedc7261d198aa402ca",
".git/logs/refs/remotes/origin/main": "1e5fbf0f89d0efd10e9208ddb3553b32",
".git/objects/02/090255880794cb6ff0b373666cd8425687c19d": "9ad53f022f64b75c025c2f196e941f1d",
".git/objects/02/f7515329338c3ec3fc1bd778f46a8572379126": "5eeaccbac5e458a89d3f8c527b8e7c38",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/ebc9e59a02c584b990b08b6ac875940e472e77": "36de6bee69f1b103e01b9299578581ab",
".git/objects/08/6875360c18f078a32e058b6f9df414abac3f45": "2588a50b396a1e8a72a32c2a713edc3d",
".git/objects/0a/c76be17cbc7908321f2b4aa39832a90dca670f": "d02cce29caa8daedda4c2ed12c3c55fe",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/15/6822542115d27cf73a143d91f4d4cd8b1e9e19": "78ec2258ba91e7fcd08ddf8a0356f74f",
".git/objects/18/e43d5162be682e3d6282570ce7da1e4ee92768": "1c5ddfed3848a9dc527ed09768e8bfaf",
".git/objects/1a/a5de4b22a9ae944ea4263cbc7a475d78bcea71": "e4c68aa3b382d0f39e20822b6f5eb847",
".git/objects/1c/3c9412f10c20019345f10da7c528630af4e2b0": "61dc5bcd9cb23399adbd3afc9a386a60",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/26/ffd972d4fe30377a57a3eedb03b804718d2bf6": "c0f0b8d8a1941e038e4af2239d74bb6c",
".git/objects/27/c37ac35116b17f61f29a565e3238023360a95c": "833e6b3f4378ae874991e34c4d53e6e2",
".git/objects/2a/7bfc6f3ae3b2c3ac5056ab01c794bf4ec749e0": "08419f32d3f0761dba6e7f776b101125",
".git/objects/31/7671e65860612410626ed314afbb478f955ac2": "ea2bb513bd703139e5351a3489a8ac0a",
".git/objects/32/72ea24f5fd5edc24a65150d13ad5069ff93b3b": "e6de5be73011bf95373111ffe12ea4c9",
".git/objects/32/deee9b951c96714d6c257220f403f8e4894459": "38b65f4437ce62d1b6c0f0212671b773",
".git/objects/33/effec7459bad19edfd97aedd4b7f2d52d5f5b6": "97674f4b8842743683223a671b6065a1",
".git/objects/34/72074c26bc914c7742d2d2f9541251c201b45d": "8df14ffa0271c90f592bfffb1efba816",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/9afaf7680dbc319d3f41459d90f3ad282b7d7f": "9fcb34e7941aee493634396739941c6b",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/b6f34b4ebfe5e77b58411aa0cf83f39f5775d8": "d44cc2541a1f9867c46e944f4afcc3ff",
".git/objects/3d/770317aa8bade816e1a704af2a3551ae0f1ca2": "5e8ec8370b9157e89caf9a12877e6e41",
".git/objects/3e/67131fa3cdfc29b70d54e616fdaee342152df5": "e23d22727746f8ade2c7cd5ef4cfe35c",
".git/objects/43/5ff2a5ecce74be5efcf2c1a22ac92f36bf2573": "00e97dd000cd1b96cf85099f3323d3f4",
".git/objects/43/733621f00ace0513593cbc6b498c86f382b573": "5b4b153c517786e37000dc8e4f03d06e",
".git/objects/47/3f9c2f112a86b9fc648e679689eca070c54744": "71a5a03258d846fe442a782a5abe5d83",
".git/objects/48/850d8615efafd65d1415a3bf186bd0c161c403": "7bc32e484018a631d2ee1a914dc19ef7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/e314b06594361b32b2893f41311fa4128b1803": "1dca6c33921a80e720ad83287857ce59",
".git/objects/5d/74bbc60d76d6713cba48107ffe0f8907462f9e": "4bd05e9509e678c58a757c477fe1b877",
".git/objects/5d/d8d4cf3c165f92fea80ce821c8b742f91c51e8": "df2aad0d95e873a09e666ccdb7f49ece",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6e/ecfa025d89320ac27d18095c912c55b38b533f": "b0f768b916f4a9cddb6205718d1ec78f",
".git/objects/6f/6e880c9dc09f0c7ecb1e5debfcb3d6c37e0975": "c9b5835fdd9ec19661bf8515a8e8892f",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/9b8f8425b040307e459152114ce6761d25923b": "c766a6a8c529a4e4c823bddcc3e7f0c9",
".git/objects/77/7f143d5948556aae35e26fcec0d88e6614c7e6": "250a6c682bd0ba1dcb7195246e84b011",
".git/objects/79/4d1ca03eec75853047e3bb823757a5fe4c37bd": "6da69d5a32711d803666ebc331fd4d78",
".git/objects/7e/5547df2fa7960c25585ebea0e38e7c3f826d91": "79b6c2cbc0b01ed96d513beb6c767b44",
".git/objects/84/37160070daa30d22361eabf956288aaa5d8496": "59765beadb1c7fc755dbe250da63d72d",
".git/objects/87/1d849c48fab56b272194edaaad234f37c5485a": "b1ecfad500b1d5f184c082a9defe043b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/709b329ae01ed6bcb929c2cd50d35e1ca6730e": "85cde155d61b7f890be880daef89f92b",
".git/objects/94/55daa44b362dd21db7c8b8c9adf6c696a408fd": "1ef56c526d4da9894a5c47f64eb51ea2",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/9b/454e8b5e6271a13999b2ffcfb98c3bd2e9ff7d": "d40d5ccc08a97526fdc8342b2425bd15",
".git/objects/9d/a0c112d4cdb7b7d405c45d50caf2f8f61e195c": "c824295e738a0fb845891cd89f3505fd",
".git/objects/9e/e4537a5e09c3d16638d2f42719c27819c19d5c": "7baf3741e18aa4a1877b2aaf49ad6363",
".git/objects/9f/1464554b50c9cc7452351193f16dadc39e3d00": "a17386b29dc42582bbdc374341be7f33",
".git/objects/9f/32a1eae5deb4beb442885a669ef8ef7347bf72": "e6330d8621dbd90adcdbfbbcf78cb7d6",
".git/objects/a0/20725aeb596c6cf7b5dac2b8cd5ba5e2011426": "ddbe7a46b022447ffb2cc33d779408f8",
".git/objects/a1/813fbc7d8e85282cbae624f3baf39edde85834": "cae4112eca6d65aad9115a9be8f6d5c3",
".git/objects/a4/51763ffbed106acceb94a8afdf453568e11153": "680ee42c0498d8749c4101497c73e842",
".git/objects/aa/ace59d73dfd89ca62911633da78f5d88d4c045": "19a3de06a681f694c8c76604c9a87eee",
".git/objects/aa/ad2a838cf391fcbdca8fc158c905edea6c778c": "9ae61428c767fec7c3eb7f1017066f38",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/bf82da45b0969ab7f703ac7f4cc9e6002d369f": "2d42aaa8736526287c26c7ab5ece5df7",
".git/objects/b5/3c94fe82ab885fded06054613255540a76b02f": "94777df0898be42f97f48d2a15a5f114",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/7fa726abf114fcf550b48e63dbfe8e51535019": "acfc5eb76ca1ca900ceadc8af0c0f428",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c6/ea270d13e88a72f300de3d37ce524f88ef6448": "942c9ba4d7e3464db436f6abc2757fb7",
".git/objects/c7/05a7d959784db9bf9e83369425ccedbcf9f0a3": "e1f878118f24362c487ee71dd9d05f43",
".git/objects/c9/1ecf24366fafe72a6d09ef15caa6adf1cb04c7": "ce471395d33ba4edb9d3abd9802b4304",
".git/objects/ca/23bf0ce2a18d3f954e68cd13f5ae3da926fb42": "3b704eac4ddc050676c981601aedaecc",
".git/objects/ca/2d984dffe2556b90602e354aaca94fe93db8a7": "c4b758da67f3379334b5d6e2dafc22f4",
".git/objects/cb/e3ff8b768e494ecff59f43d969b46e2e893e7f": "dd99cbf23e777e923538854dbfb0baac",
".git/objects/cc/56fe7dceec038b98c1f7eceba4d398f3dae6d3": "c9ce85e39979205ba8f8b0191bc070ee",
".git/objects/d3/364e29fc8cd9bd6ebef4e2faaf002aff66bfd7": "a1d5b0ce543f06da8f06fe9cfcf7633d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/bcfd4449c62c12240ed0f9c54731189f839c13": "6dc1127a5b328d37ca7f5258333c6e30",
".git/objects/d9/314bf7e01c6adb7702c38bba70b190ad40bc36": "bf7011b73487addfe38a905e683a5d13",
".git/objects/d9/66edf990fe027479d7ba78ebee7ffa61cfd56d": "86529db845e64819240f31a65bbda07d",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/802f076b795081f6d97ae99a6b647a484fb74b": "60e0200939f2bf77a6d6c3123637f9e9",
".git/objects/df/9a8f6040474ab2b2a9c17d80066b5faa90a446": "117ed63fb7c0582800030655e02fb13f",
".git/objects/e4/7efe3da40509b6404fef60037464872e8433f5": "f1b6cb00515618cf20b64a89e85abd40",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b16b501b6ef1e12d01e029b2c806846b6e80e4": "832532aa53a118163ea3128a6981cf61",
".git/objects/f2/e696588177ff6bbcceace484f30a2f68c83721": "d671bb5f280fb3330b06dac444c14696",
".git/objects/f7/3b98049db285d614a1b979f0ba3a0493db57c2": "0c32536db22c9ebe8827cdf3f32f9fa5",
".git/objects/fc/84807cdb4b636faf202da2c19adfe31547ab8d": "887b7f9860f28949911f4150af233b98",
".git/refs/heads/main": "0b83824904038c14c16a5640870cf7e3",
".git/refs/remotes/origin/main": "0b83824904038c14c16a5640870cf7e3",
"assets/AssetManifest.bin": "7b4768ef625ed64d6b975992ebac137d",
"assets/AssetManifest.json": "9c43152064044b5b1de306903d055b9a",
"assets/assets/bottombar/account-grey.png": "4bf1359d62da48a4d5a35a5afdb7f7fa",
"assets/assets/bottombar/account-white.png": "d4695672501f0f55b14221b8b42e61d9",
"assets/assets/bottombar/chat-grey.png": "fbb43a15b42baf0a25cda32d52811edc",
"assets/assets/bottombar/chat-white.png": "2cc79ffffb17354f8b404237ee048c8f",
"assets/assets/bottombar/group-grey.png": "6555b8ef3fc5ddda79ec3931952bacf3",
"assets/assets/bottombar/group-white.png": "610663662266c2cbd1e2006fa7f53f0e",
"assets/assets/bottombar/home-grey.png": "0b563a5e78150a0052fd41be1ae74839",
"assets/assets/bottombar/home-white.png": "d759ce0c97b890ca7d880de912ed8984",
"assets/assets/bottombar/search-grey.png": "e846b9e4e8a77583946aa35aa92ed401",
"assets/assets/bottombar/search-white.png": "771feb25f80ba97239045d0ae99bc8d1",
"assets/assets/icons/api.png": "3beff8c7a3461425fa934b18c2c3e5dd",
"assets/assets/icons/appointment.png": "4dfa5e01333262258d2a9bc030069225",
"assets/assets/icons/appointment_d.png": "844b229f219aef746057b53a5f3a5b30",
"assets/assets/icons/arrow_left.png": "b198ca9ea3bc115edda96c717f218c71",
"assets/assets/icons/calendar.png": "8e3f5227d0c4b353227885428fe4c3d6",
"assets/assets/icons/carbon_settings-adjust.png": "ac83f8269ef5c60b12fb9668d4e619a1",
"assets/assets/icons/card.png": "af925604a9c0b8a5ef5bdf7551e97a52",
"assets/assets/icons/dashboard.png": "0254a70decf916ab6ba92a4dc9fd3279",
"assets/assets/icons/ellipse.png": "04676a98fdc6941351bb9f5644b2383f",
"assets/assets/icons/email.png": "b1b9cb976d0da7329a7680d86c69238d",
"assets/assets/icons/facebook.png": "c2fe28130398eb22a1f046c4904a0d72",
"assets/assets/icons/facebook_logo.png": "fd1f7e3d0cdf3d365dbaf3bb8cfc74c9",
"assets/assets/icons/facebook_messenger.png": "bac24b59fd6aa2880c1913131f12d955",
"assets/assets/icons/gmail.png": "c927189e9e50b79af5f5f0a2c4ea146c",
"assets/assets/icons/lead.png": "e411cd8439c2843c35efb1197bb09553",
"assets/assets/icons/leads.png": "77be9b97f981b165d2bf07ace118e60a",
"assets/assets/icons/maestro.png": "d630bf17b36fc9d0dc2e716ce2d7426f",
"assets/assets/icons/meta.png": "b2ccfd65bf67b5acc3b8fabb2bd4b405",
"assets/assets/icons/more.png": "8a459c11c9e47d8ccb15dfc518b525e8",
"assets/assets/icons/new_lead.png": "dd22b9d5bab49b7eea5ae0f32157efc4",
"assets/assets/icons/partner.png": "b45c7c565d51ba94f36e43fe99b8e40d",
"assets/assets/icons/pass_due.png": "048b811cf6b4b7ec2bdc2180a5729209",
"assets/assets/icons/pin.png": "cb6f33a0cac8d6520726bb28f566cfd9",
"assets/assets/icons/profile.png": "42d7ff3970a4f5f7a06b57b627ac55e4",
"assets/assets/icons/report.png": "8b6248fe4772f73d52486d465dc34efc",
"assets/assets/icons/settings.png": "29dc1be75e4dd0c3bd4cc3e491db9f77",
"assets/assets/icons/tiktok.png": "723cb59f0b0d242933edf435a0a55167",
"assets/assets/icons/tiktok_Color.png": "7cb5d85a944b0797e98d4cb025c010e9",
"assets/assets/icons/toparrow.png": "6b3ff72a65a3ff151572b02be390ac78",
"assets/assets/icons/visa.jpg": "22f38e8d43d2c338fd67377d39d4b5e3",
"assets/assets/icons/whatapp%2520(1).png": "1eee29961c3c0a7da3bc850aec6187f1",
"assets/assets/icons/whatapp.jpg": "d15ad0b63ecb72b32463e936e795b171",
"assets/assets/icons/whatapp_logo.jpg": "76779b99b768cddf3d7b7aa77fc754cd",
"assets/assets/icons/whatsapp.png": "4ee43604ae31d2eb9538895e7942536d",
"assets/assets/icons/workspace.png": "9f94ab79cfe043c75a2820771e2021e5",
"assets/assets/icons/ZIEN_logo.png": "13e0007138eeaed7624065507e3d4832",
"assets/assets/profile/dp1.png": "8a630812ca3452184432920c20beb36f",
"assets/assets/profile/dp10.png": "d06da028a5bd88aebf47eee9763fd341",
"assets/assets/profile/dp2.png": "69185bd6a3d48044aff3204e3538ba0e",
"assets/assets/profile/dp3.jpg": "61c205888f8260d8bd5480fca022b949",
"assets/assets/profile/dp4.jpg": "4fd9da1de604e45d2fb3fd1c3c6e55d1",
"assets/assets/profile/dp5.png": "baa3ba7068eefa3a8056495e6915843d",
"assets/assets/profile/dp6.png": "f82f1b4c050f8baecacba91f3d6ac4a8",
"assets/assets/profile/dp7.jpg": "4ea4003b1f49ed084b2860a54fc2c84f",
"assets/assets/profile/dp8.png": "cdab27be5a6fac92bae78dd4a1337f8d",
"assets/assets/profile/dp9.png": "4103b95cd59f3c2d4121a204bd9c9eff",
"assets/FontManifest.json": "5958b7d6187401a3e330b3a441e4320b",
"assets/fonts/MaterialIcons-Regular.otf": "9abe1ed8571ecc9d8fae3a1366be47d6",
"assets/NOTICES": "c2dd593a5af971a23291ea861f66c104",
"assets/packages/awesome_icons/fonts/Brands-Regular-400.otf": "b6eadee36948183e0753dd262df9d678",
"assets/packages/awesome_icons/fonts/Free-Regular-400.otf": "633868de8a2c3b1dd5c6c1df384777a8",
"assets/packages/awesome_icons/fonts/Free-Solid-900.otf": "68126a6648ba96530b402dd992c1feb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c97573e7de4903e1baf05930ee20393c",
"/": "c97573e7de4903e1baf05930ee20393c",
"main.dart.js": "ec49c852c8106012eaf0b5dce59f2414",
"manifest.json": "e3246c845df828a985add4eb6d29e4be",
"version.json": "17ec11ef3e33d4edfd922f4fa8ae8193"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
