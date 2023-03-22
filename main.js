const users = [
  {
    name: "nick",
    displayName: "Nick",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/fb67015b68ab4b5c842d29175cdd85c4.webp",
  },
  {
    name: "vince",
    displayName: "Vince",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/6cc7ccdd8b867ee2cca5b17ae70be4d3.webp",
  },
  {
    name: "brysongray",
    displayName: "BrysonGray",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/982d5b011bf1f56ca9a9b53e90e0480a.webp",
  },
  {
    name: "tylerrussell",
    displayName: "TylerRussell",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/708fb405f8863b4cdc7e36062b3dfd55.webp",
  },
  {
    name: "beardson",
    displayName: "Beardson",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/e6228a89403ca0c3648048cec1f98530.webp",
  },
  {
    name: "franssen",
    displayName: "Franssen",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/99749aa7ba9446e9f3f678dd120d5e18.webp",
  },
  {
    name: "joetheboomer",
    displayName: "JoeTheBoomer",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/22245801385ec69f5754d5307795533f.webp",
  },
  {
    name: "jimbozoomer",
    displayName: "JimboZoomer",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/23c148cd85c7e27ee7d36b161d708dd5.webp",
  },
  {
    name: "kaiclips",
    displayName: "KaiClips",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/a750178ad609532620bd0e624e7de4ec.webp",
  },
  {
    name: "boseph",
    displayName: "Boseph",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/eeebc113b12dd46709c9117d1a880933.webp",
  },
  {
    name: "bakedalaska",
    displayName: "BakedAlaska",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/076a062bc1caedb0b919d88c1cf4b764.webp",
  },
  {
    name: "veyta",
    displayName: "Veyta",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/45522a02de8f61a02aabff0d3bb27983.webp",
  },
  {
    name: "augie",
    displayName: "Augie",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/2d0569ea03e55d1d8d88cab98ea41fdb.webp",
  },
  {
    name: "roosh",
    displayName: "Roosh",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/0bcced10849adfed39a35bf1dba83aa0.webp",
  },
  {
    name: "ethanralph",
    displayName: "EthanRalph",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/6d5fb630938962f7254550e8cd22715b.webp",
  },
  {
    name: "stewpeters",
    displayName: "StewPeters",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/86a251dc6486f8f12d46bceb65360c74.webp",
  },
  {
    name: "wurzelroot",
    displayName: "Wurzelroot",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/858ddbf05de0c0767c3b7fce6dc86d65.webp",
  },
  {
    name: "tenryo",
    displayName: "Tenryo",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/9016109bbdcbdfd19debcfaa18a70d5c.webp",
  },
  {
    name: "daltonclodfelter",
    displayName: "DaltonClodfelter",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/532d7510c72d53523ebae662ab5c8e81.webp",
  },
  {
    name: "shooter",
    displayName: "Shooter",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/92abcc1864d79540a11296457b31bcd7.webp",
  },
  {
    name: "crosstalknews",
    displayName: "CrossTalkNews",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/da7b2bcf2d0378bcca4cbdabf64f9fd1.webp",
  },
  {
    name: "laurenwitzke",
    displayName: "LaurenWitzke",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/ec59aebc811cb71e6c7621735f5770c3.webp",
  },
  {
    name: "ux",
    displayName: "UX",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/a178da02d92170bbb3721b271026d9dc.webp",
  },
  {
    name: "trsartor",
    displayName: "TRSartor",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/a1142881ca41005f9084d5673ab25905.webp",
  },
  {
    name: "gab",
    displayName: "Gab",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/43c4ed03f3b29f6eb7e9f40cb69d909c.webp",
  },
  {
    name: "alexjones",
    displayName: "AlexJones",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/22292afe5481aeb0a6bf27bd391d4ea4.webp",
  },
  {
    name: "bookcat",
    displayName: "BookCat",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/b5760394dc0fbef71e306e8cdf8899f2.webp",
  },
  {
    name: "althype",
    displayName: "AltHype",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/2710ab405b6c23a0aa70bdb63291772b.webp",
  },
  {
    name: "michaelalberto",
    displayName: "MichaelAlberto",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/97f549c5af4f01aead23575a13d27edc.webp",
  },
  {
    name: "patrickhowley",
    displayName: "PatrickHowley",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/316c9c8e2cf37df0fa2deeaf724ca4ca.webp",
  },
  {
    name: "paultown",
    displayName: "PaulTown",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/324f7b0dd894a9049446fb877701996d.webp",
  },
  {
    name: "woozuh",
    displayName: "Woozuh",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/4f3f4d178561c48687db2cc5a37ec387.webp",
  },
  {
    name: "aff",
    displayName: "AFF",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/2acf7f32009c9df31644ceb04bcb88db.webp",
  },
  {
    name: "jlp",
    displayName: "JLP",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/5296f49b756eb7ad7b4b30c01aa8cd00.webp",
  },
  {
    name: "chieftrumpster",
    displayName: "ChiefTrumpster",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/83b67e11f2cdff651dfedcf0e593d5e5.webp",
  },
  {
    name: "valiantnews",
    displayName: "ValiantNews",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/a348f9cd12fbc60c7eec7086cb27a2cb.webp",
  },
  {
    name: "waynedupreeshow",
    displayName: "WayneDupreeShow",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/9973611d4121f4fdd7371b091618b2cc.webp",
  },
  {
    name: "josh",
    displayName: "Josh",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/ffdf27ecee7a6a4bd00bc6dedf881c35.webp",
  },
  {
    name: "cancelproof",
    displayName: "CancelProof",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/3155c027049a5ddc9516a95d94b8c851.webp",
  },
  {
    name: "milo",
    displayName: "Milo",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/b682634b64d874bef60f12b28fc5e4c4.webp",
  },
  {
    name: "flamenco",
    displayName: "Flamenco",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/d13ab753001c73844d8b0e7e5b6f9f07.webp",
  },
  {
    name: "seanmccrossen",
    displayName: "SeanMcCrossen",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/4f67db7f50dcf249ad827799a68ce3e6.webp",
  },
  {
    name: "politicallyprovoked",
    displayName: "PoliticallyProvoked",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/29d3936b85fecaf8106046f4094ba805.webp",
  },
  {
    name: "destiny",
    displayName: "Destiny",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/0eb38498b9fab0ae4663916c92bf3fbf.webp",
  },
  {
    name: "jacksonhinkle",
    displayName: "JacksonHinkle",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/42b0844e665153dd5266865d886ba4b4.webp",
  },
  {
    name: "infrared",
    displayName: "Infrared",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/5394505b55a2ffc5751e75b6b93c4a9c.webp",
  },
  {
    name: "bigtech",
    displayName: "BigTech",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/45e6d86b099c35195eaf91cc93a9834a.webp",
  },
  {
    name: "speckzo",
    displayName: "Speckzo",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/34dbfd804c442a479d387e51ee22d12b.webp",
  },
  {
    name: "classicaltheist",
    displayName: "ClassicalTheist",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/032aa56d4ce1d61dd09925decb047465.webp",
  },
  {
    name: "wendell",
    displayName: "wendell",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/53ca20d34bc6fe1d02ccc41a4d3b0964.webp",
  },
  {
    name: "kingknub",
    displayName: "KingKnub",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/a9eee1fc683ee54f8f72a58bd308220c.webp",
  },
  {
    name: "acumia",
    displayName: "ACumia",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/bfa10ab2d3f27483a15a2626c274e41d.webp",
  },
  {
    name: "hw",
    displayName: "HW",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/f3d83d117e9cf069073584d027dc8284.webp",
  },
  {
    name: "redpilledjacob",
    displayName: "redpilledjacob",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/43a85754f3385e51f75267ae40af09dc.webp",
  },
  {
    name: "basedbrandt",
    displayName: "BasedBrandt",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/a714018d4406538997227e69dc572068.webp",
  },
  {
    name: "bibble",
    displayName: "Bibble",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/8b20bff8df9d360f87d5ee1dcbf9da9e.webp",
  },
  {
    name: "kyleclifton",
    displayName: "KyleClifton",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/67dc31785172821b6b413a80b5ff0304.webp",
  },
  {
    name: "aidenprojects",
    displayName: "AidenProjects",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/7c8bd9c6daed345223cced622de428e3.webp",
  },
  {
    name: "emichaeljones",
    displayName: "EMichaelJones",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/c0500cded5230e2605c6529c62b17ab6.webp",
  },
  {
    name: "lofi",
    displayName: "lofi",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/008691625e77f867aa291b4a161d4f48.webp",
  },
  {
    name: "cozyplays",
    displayName: "CozyPlays",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/9f3be2e86182774e5a64663b8fc0d05e.webp",
  },
  {
    name: "dawson",
    displayName: "Dawson",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/f5973afcd155668b462de5e613b439f6.webp",
  },
  {
    name: "salvopancakes",
    displayName: "SALVOPANCAKES",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/4103c704eaa4743cfbdab927587a53c8.webp",
  },
  {
    name: "lporiginalg",
    displayName: "LPoriginalG",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/86cd6e0c0816a4235238c71918e44401.webp",
  },
  {
    name: "patdixon",
    displayName: "PatDixon",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/187ecfe737c8553f21732babf307428a.webp",
  },
  {
    name: "joeldavis",
    displayName: "JoelDavis",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/940568c00f04c9d00fb6fdddbe258659.webp",
  },
  {
    name: "loulz",
    displayName: "Loulz",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/48b7ef3cbbcb0a2233573362b7867093.webp",
  },
  {
    name: "joshhowes",
    displayName: "JoshHowes",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/0dff4c90b395a06786921e753639ecea.webp",
  },
  {
    name: "ali",
    displayName: "Ali",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/743bf4845962096dc94acbda0976db50.webp",
  },
  {
    name: "stone",
    displayName: "Stone",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/4053ca1f9dd45a83657d59972bf30b0c.webp",
  },
  {
    name: "loomer",
    displayName: "LOOMER",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/62cd6cd2b1820ccd12dce85be62bd1d3.webp",
  },
  {
    name: "keithwoods",
    displayName: "KeithWoods",
    avatarUrl:
      "https://prd.foxtrotstream.xyz/a/av/5cc4ed8e0ac9c5b4e370d0de64ad4eb0.webp",
  },
].sort((a, b) =>
  a.displayName.toLowerCase().localeCompare(b.displayName.toLowerCase())
);

const getUser = (display) => users.find((i) => i.displayName === display).name;
const getChecked = () =>
  [...document.querySelectorAll("input[type=checkbox]")].filter(
    (item) => item.checked
  );

const copyToClipboard = (str) => {
  const quantity = getChecked().filter(
    (i) => i.id !== "allStreamCheckbox"
  ).length;
  if (quantity === 0) {
    M.toast({ text: "Select at least one stream", classes: "red" });
  } else {
    navigator.clipboard.writeText(str);
    M.toast({
      text: `Copied ${quantity} stream${quantity > 1 ? "s" : ""} to clipboard!`,
      classes: "cyan darken-2",
    });
  }
};

const outputLink = document.getElementById("outputLink");
const getLink = () => {
  const base =
    "https://archive.org/advancedsearch.php?q=mediatype:audio AND source:cozytv AND code:kanye AND uploader:hankcavill@proton.me";
  const params = "&rows=100&output=rss";
  let link = base;
  if (allStreams.checked) {
    link += params;
  } else {
    const checked = getChecked();
    if (checked.length === 0) return "";
    if (checked.length === 1) {
      const query = checked.map(
        (i) =>
          `channel:(${getUser(i.parentElement.lastElementChild.textContent)})`
      );
      link += " AND " + query + params;
    } else {
      const query = checked
        .map((i) => getUser(i.parentElement.lastElementChild.textContent))
        .join(" OR ");
      link += " AND " + `channel:(${query})` + params;
    }
  }

  return encodeURI(link);
};

const checklist = document.getElementById("checklist");
for (let user of users) {
  const item = document.createElement("p");
  item.className = "col s12 m6 l4 xl3";
  item.innerHTML = `<label class="valign-wrapper">
  <img src="${user.avatarUrl}" alt="${user.name}" width="80" class="circle" />
  <input type="checkbox" >
  <span>${user.displayName}</span>
</label>`;
  checklist.appendChild(item);
}

const allStreams = document.getElementById("allStreamCheckbox");
allStreams.addEventListener("change", () => {
  if (allStreams.checked)
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((item) => (item.checked = true));
});

document.querySelectorAll("input[type=checkbox]").forEach((item) =>
  item.addEventListener("change", () => {
    if (!item.checked) allStreams.checked = false;
    outputLink.value = getLink();
  })
);

document
  .getElementById("copyButton")
  .addEventListener("click", () => copyToClipboard(getLink()));

const clearSelection = document.getElementById("clearSelection");
clearSelection.addEventListener("click", () => {
  document
    .querySelectorAll("input[type=checkbox]")
    .forEach((item) => (item.checked = false));
  outputLink.value = getLink();
});
