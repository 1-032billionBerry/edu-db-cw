/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "97b97b0940b96bb64a3159708ffa82be"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.10a1179b.css",
    "revision": "c29d50e984dabf68865d4274afab6926"
  },
  {
    "url": "assets/img/GET_allData.8e3d1edb.png",
    "revision": "8e3d1edb7d131360bd6a9c854eab0221"
  },
  {
    "url": "assets/img/GET_allRequests_admin.b8091be9.png",
    "revision": "b8091be9461083358c13452ef6d483f6"
  },
  {
    "url": "assets/img/GET_allRequests.24d78636.png",
    "revision": "24d786362e25dd2bab5e431e0303ebd6"
  },
  {
    "url": "assets/img/PATCH_addPermissions_admin_1.ac313e33.png",
    "revision": "ac313e3397f50887d2f84f9c29575535"
  },
  {
    "url": "assets/img/PATCH_addPermissions_admin_2.b235c288.png",
    "revision": "b235c288efa10d7dd36db8ffd5d02aa8"
  },
  {
    "url": "assets/img/POST_approveRequest_admin.cc4c76d6.png",
    "revision": "cc4c76d6c1be3072cbe4c7728edf5678"
  },
  {
    "url": "assets/img/POST_denyRequest_admin.41405bcf.png",
    "revision": "41405bcf7318875ad65f93b5d09a7dfc"
  },
  {
    "url": "assets/img/POST_uploadRequest.01d35001.png",
    "revision": "01d35001b365f4b4dc53f4dc551f0f6b"
  },
  {
    "url": "assets/img/relational_schema.094ee927.png",
    "revision": "094ee927e01563b4c7f54c42bb73eeb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.38c60067.js",
    "revision": "395a0a8f07c47a22b6a690dfbea250a8"
  },
  {
    "url": "assets/js/11.489fbe1b.js",
    "revision": "3ae989c7921de4033050590ae52eaccf"
  },
  {
    "url": "assets/js/12.78c39665.js",
    "revision": "79e25df2e842f05a09834ba7eb4c6a9c"
  },
  {
    "url": "assets/js/13.1043cd00.js",
    "revision": "59fb765439cf03f6f68af5fc4950765d"
  },
  {
    "url": "assets/js/14.c77a2fa0.js",
    "revision": "88449c133cb4257cbf7c5d6d1da89fe9"
  },
  {
    "url": "assets/js/15.cb8ff6d3.js",
    "revision": "1b8869ed39373fa183c8762c28350b19"
  },
  {
    "url": "assets/js/16.4e6ff3b7.js",
    "revision": "29314a5ddc9764af5ce69985b66703f1"
  },
  {
    "url": "assets/js/17.5d79bff0.js",
    "revision": "9c724f125590ee1d9d806c1ca5cad61b"
  },
  {
    "url": "assets/js/18.acfd9fab.js",
    "revision": "9dccef6d2136ecbe99021060168ea83d"
  },
  {
    "url": "assets/js/19.dc68a2c3.js",
    "revision": "6f3fdff723a3a524c95a3c9501c7300c"
  },
  {
    "url": "assets/js/2.3e12d9a9.js",
    "revision": "542c860814a3007ca4beb71a8896bc42"
  },
  {
    "url": "assets/js/20.b41fdaa3.js",
    "revision": "a5e46ced8cb3c954fe4e2e9e0744fa30"
  },
  {
    "url": "assets/js/21.b31f9642.js",
    "revision": "c073e5f309633cf1363c208be6f67342"
  },
  {
    "url": "assets/js/22.f57c7cba.js",
    "revision": "bd9d7364111f00e9867a790097891fa2"
  },
  {
    "url": "assets/js/23.98baa90b.js",
    "revision": "bcf46e7577994faadd683a4f288248b4"
  },
  {
    "url": "assets/js/24.3c2a6580.js",
    "revision": "cdf56be90d2bfe51cfef97324cb80284"
  },
  {
    "url": "assets/js/26.ddb41728.js",
    "revision": "8c81b1cd43d727680472e430d9f82d0a"
  },
  {
    "url": "assets/js/3.a0272aad.js",
    "revision": "a4ff8a58d678edc61bedd6a0f59bf973"
  },
  {
    "url": "assets/js/4.219bd502.js",
    "revision": "1cbb3299f117797002853ea9848e5db6"
  },
  {
    "url": "assets/js/5.d0c49000.js",
    "revision": "d7e8746984f00660b0e17a1d4dcfa499"
  },
  {
    "url": "assets/js/6.40aabc4e.js",
    "revision": "7bb241ac125317b33fb32367f8d8c065"
  },
  {
    "url": "assets/js/7.a7f18f7d.js",
    "revision": "93750c5294ab475e8a4c7ae614b1f93f"
  },
  {
    "url": "assets/js/8.79576de1.js",
    "revision": "b112806412e8ce7e52ac7d60d5f66571"
  },
  {
    "url": "assets/js/9.23f667ad.js",
    "revision": "f86e2e023afff7fc0d19d80acb82b269"
  },
  {
    "url": "assets/js/app.f9ca2dbf.js",
    "revision": "8ac85971dd9c7565f0a2d4df55acc0b5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "19a54ae34226f8f9e324a9d065c4f18c"
  },
  {
    "url": "design/index.html",
    "revision": "6200a37b06741f6e02fe14728f7a4e48"
  },
  {
    "url": "index.html",
    "revision": "7527c9f580e1275716550bdc9498591d"
  },
  {
    "url": "intro/index.html",
    "revision": "3592107c67670f1e7cff068720dedd89"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7c4ba905e817fbd4ac347fa940986cd5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b4b49585399a01266afed029bd102d6e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "69e4aec983d9b17c5be57d623ffc991c"
  },
  {
    "url": "software/index.html",
    "revision": "590e2b9f94284398cf64d8475e2c564e"
  },
  {
    "url": "test/index.html",
    "revision": "4ca76962472ebe9776cab01d80e52db6"
  },
  {
    "url": "use cases/index.html",
    "revision": "376d7c0bd8ab3a14d3491992245ab356"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
