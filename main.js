const users = [
  {
    "name": "nick",
    "displayName": "Nick",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/fb67015b68ab4b5c842d29175cdd85c4.webp"
  },
  {
    "name": "vince",
    "displayName": "Vince",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/6cc7ccdd8b867ee2cca5b17ae70be4d3.webp"
  },
  {
    "name": "brysongray",
    "displayName": "BrysonGray",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/982d5b011bf1f56ca9a9b53e90e0480a.webp"
  },
  {
    "name": "tylerrussell",
    "displayName": "TylerRussell",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/6a41fe3e905e0810f090eff8a73e3ecf.webp"
  },
  {
    "name": "beardson",
    "displayName": "Beardson",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/aae4fe626e86236498724aaa6f433ec1.webp"
  },
  {
    "name": "franssen",
    "displayName": "Franssen",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/99749aa7ba9446e9f3f678dd120d5e18.webp"
  },
  {
    "name": "joetheboomer",
    "displayName": "JoeTheBoomer",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/22245801385ec69f5754d5307795533f.webp"
  },
  {
    "name": "jimbozoomer",
    "displayName": "JimboZoomer",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/23c148cd85c7e27ee7d36b161d708dd5.webp"
  },
  {
    "name": "kaiclips",
    "displayName": "KaiClips",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/a750178ad609532620bd0e624e7de4ec.webp"
  },
  {
    "name": "boseph",
    "displayName": "Boseph",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/984b4ff39f8016344be7f483fabb8e51.webp"
  },
  {
    "name": "bakedalaska",
    "displayName": "BakedAlaska",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/076a062bc1caedb0b919d88c1cf4b764.webp"
  },
  {
    "name": "veyta",
    "displayName": "Veyta",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/28d7e71f6e8b8c71dc35c8ff8ac36159.webp"
  },
  {
    "name": "augie",
    "displayName": "Augie",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/2d0569ea03e55d1d8d88cab98ea41fdb.webp"
  },
  {
    "name": "roosh",
    "displayName": "Roosh",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/0bcced10849adfed39a35bf1dba83aa0.webp"
  },
  {
    "name": "ethanralph",
    "displayName": "EthanRalph",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/6d5fb630938962f7254550e8cd22715b.webp"
  },
  {
    "name": "stewpeters",
    "displayName": "StewPeters",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/86a251dc6486f8f12d46bceb65360c74.webp"
  },
  {
    "name": "wurzelroot",
    "displayName": "Wurzelroot",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/858ddbf05de0c0767c3b7fce6dc86d65.webp"
  },
  {
    "name": "tenryo",
    "displayName": "Tenryo",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/9016109bbdcbdfd19debcfaa18a70d5c.webp"
  },
  {
    "name": "partygoy",
    "displayName": "PartyGoy",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/7030cf0a443cdee752221ce33e5fea3c.webp"
  },
  {
    "name": "daltonclodfelter",
    "displayName": "DaltonClodfelter",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/79387e6170a097b112805ab83cf4f383.webp"
  },
  {
    "name": "shooter",
    "displayName": "Shooter",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/92abcc1864d79540a11296457b31bcd7.webp"
  },
  {
    "name": "crosstalknews",
    "displayName": "CrossTalkNews",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/b68898df3433b16eab706b8f90233a8f.webp"
  },
  {
    "name": "laurenwitzke",
    "displayName": "LaurenWitzke",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/ec59aebc811cb71e6c7621735f5770c3.webp"
  },
  {
    "name": "ux",
    "displayName": "UX",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/8ab5216a68a746217ab9683348bc1759.webp"
  },
  {
    "name": "trsartor",
    "displayName": "TRSartor",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/a1142881ca41005f9084d5673ab25905.webp"
  },
  {
    "name": "gab",
    "displayName": "Gab",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/43c4ed03f3b29f6eb7e9f40cb69d909c.webp"
  },
  {
    "name": "alexjones",
    "displayName": "AlexJones",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/22292afe5481aeb0a6bf27bd391d4ea4.webp"
  },
  {
    "name": "bookcat",
    "displayName": "BookCat",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/b5760394dc0fbef71e306e8cdf8899f2.webp"
  },
  {
    "name": "althype",
    "displayName": "AltHype",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/2710ab405b6c23a0aa70bdb63291772b.webp"
  },
  {
    "name": "michaelalberto",
    "displayName": "MichaelAlberto",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/8689a8b2081ed0d6cdf41e6897e07510.webp"
  },
  {
    "name": "patrickhowley",
    "displayName": "PatrickHowley",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/316c9c8e2cf37df0fa2deeaf724ca4ca.webp"
  },
  {
    "name": "paultown",
    "displayName": "PaulTown",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/5c1f12973bfd23d8eda10b0bc4c6b070.webp"
  },
  {
    "name": "woozuh",
    "displayName": "Woozuh",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/4f3f4d178561c48687db2cc5a37ec387.webp"
  },
  {
    "name": "aff",
    "displayName": "AFF",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/2acf7f32009c9df31644ceb04bcb88db.webp"
  },
  {
    "name": "jlp",
    "displayName": "JLP",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/5296f49b756eb7ad7b4b30c01aa8cd00.webp"
  },
  {
    "name": "chieftrumpster",
    "displayName": "ChiefTrumpster",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/83b67e11f2cdff651dfedcf0e593d5e5.webp"
  },
  {
    "name": "valiantnews",
    "displayName": "ValiantNews",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/a348f9cd12fbc60c7eec7086cb27a2cb.webp"
  },
  {
    "name": "waynedupreeshow",
    "displayName": "WayneDupreeShow",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/9973611d4121f4fdd7371b091618b2cc.webp"
  },
  {
    "name": "josh",
    "displayName": "Josh",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/ffdf27ecee7a6a4bd00bc6dedf881c35.webp"
  },
  {
    "name": "cancelproof",
    "displayName": "CancelProof",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/548a95e7494b3f2ae63e88b75b750f96.webp"
  },
  {
    "name": "milo",
    "displayName": "Milo",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/b682634b64d874bef60f12b28fc5e4c4.webp"
  },
  {
    "name": "flamenco",
    "displayName": "Flamenco",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/d13ab753001c73844d8b0e7e5b6f9f07.webp"
  },
  {
    "name": "seanmccrossen",
    "displayName": "SeanMcCrossen",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/4ad67488be771645f89aec2838f0031c.webp"
  },
  {
    "name": "politicallyprovoked",
    "displayName": "PoliticallyProvoked",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/29d3936b85fecaf8106046f4094ba805.webp"
  },
  {
    "name": "destiny",
    "displayName": "Destiny",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/0eb38498b9fab0ae4663916c92bf3fbf.webp"
  },
  {
    "name": "jacksonhinkle",
    "displayName": "JacksonHinkle",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/42b0844e665153dd5266865d886ba4b4.webp"
  },
  {
    "name": "infrared",
    "displayName": "Infrared",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/5394505b55a2ffc5751e75b6b93c4a9c.webp"
  },
  {
    "name": "bigtech",
    "displayName": "BigTech",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/5bb88689d975527988c0078d1d74f9eb.webp"
  },
  {
    "name": "speckzo",
    "displayName": "Speckzo",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/31a3da714b94d52a5670b88b123d9aac.webp"
  },
  {
    "name": "classicaltheist",
    "displayName": "ClassicalTheist",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/032aa56d4ce1d61dd09925decb047465.webp"
  },
  {
    "name": "wendell",
    "displayName": "wendell",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/aaa543b062cc67cfd374d3ee4d21735a.webp"
  },
  {
    "name": "kingknub",
    "displayName": "KingKnub",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/a9eee1fc683ee54f8f72a58bd308220c.webp"
  },
  {
    "name": "acumia",
    "displayName": "ACumia",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/bfa10ab2d3f27483a15a2626c274e41d.webp"
  },
  {
    "name": "hw",
    "displayName": "HW",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/f3d83d117e9cf069073584d027dc8284.webp"
  },
  {
    "name": "redpilledjacob",
    "displayName": "redpilledjacob",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/43a85754f3385e51f75267ae40af09dc.webp"
  },
  {
    "name": "basedbrant",
    "displayName": "BasedBrant",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/8dc240b3a3eeef1857c8f11bbb61b1ec.webp"
  },
  {
    "name": "bibble",
    "displayName": "Bibble",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/8b20bff8df9d360f87d5ee1dcbf9da9e.webp"
  },
  {
    "name": "kyleclifton",
    "displayName": "KyleClifton",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/67dc31785172821b6b413a80b5ff0304.webp"
  },
  {
    "name": "aidenprojects",
    "displayName": "AidenProjects",
    "avatarUrl": "https://prd.foxtrotstream.xyz/a/av/7c8bd9c6daed345223cced622de428e3.webp"
  }
].sort((a, b) => a.displayName.toLowerCase().localeCompare(b.displayName.toLowerCase()));

const getUser = display => users.find(i => i.displayName === display).name;
const getChecked = () => [...document.querySelectorAll('input[type=checkbox]')].filter(item => item.checked);

const copyToClipboard = str => {
  const quantity = getChecked().filter(i => i.id !== 'allStreamCheckbox').length;
  if (quantity === 0) {
    M.toast({ text: 'Select at least one stream', classes: 'red' });
  } else {
    navigator.clipboard.writeText(str);
    M.toast({ text: `Copied ${quantity} stream${quantity > 1 ? 's' : ''} to clipboard!`, classes: 'cyan darken-2' });
  }
};

const outputLink = document.getElementById('outputLink');
const getLink = () => {
  const base = 'https://archive.org/advancedsearch.php?q=mediatype:audio AND source:cozytv AND code:kanye AND uploader:hankcavill@proton.me';
  const params = '&rows=100&output=rss';
  let link = base;
  if (allStreams.checked) {
    link += params;
  } else {
    const checked = getChecked();
    if (checked.length === 0) return '';
    if (checked.length === 1) {
      const query = checked.map(i => `channel:(${getUser(i.parentElement.lastElementChild.textContent)})`);
      link += ' AND ' + query + params;
    } else {
      const query = checked.map(i => getUser(i.parentElement.lastElementChild.textContent)).join(' OR ');
      link += ' AND ' + `channel:(${query})` + params;
    }
  }

  return encodeURI(link);
}

const checklist = document.getElementById('checklist');
for (let user of users) {
  const item = document.createElement('p');
  item.className = 'col s12 m6 l4 xl3';
  item.innerHTML = `<label class="valign-wrapper">
  <img src="${user.avatarUrl}" alt="${user.name}" width="80" class="circle" />
  <input type="checkbox" >
  <span>${user.displayName}</span>
</label>`;
  checklist.appendChild(item);
}


const allStreams = document.getElementById('allStreamCheckbox');
allStreams.addEventListener('change', () => {
  if (allStreams.checked) document.querySelectorAll('input[type=checkbox]').forEach(item => item.checked = true)
});

document.querySelectorAll('input[type=checkbox]').forEach(item => item.addEventListener('change', () => {
  if (!item.checked) allStreams.checked = false;
  outputLink.value = getLink();
}));

document.getElementById('copyButton').addEventListener('click', () => copyToClipboard(getLink()));

const clearSelection = document.getElementById('clearSelection');
clearSelection.addEventListener('click', () => {
  document.querySelectorAll('input[type=checkbox]').forEach(item => item.checked = false);
  outputLink.value = getLink();
});

