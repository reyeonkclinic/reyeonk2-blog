// Languages shown in the header language menu. `home` is the fallback target
// for pages that have no translated counterpart (see `langUrl` filter).
const list = [
	{ code: "ko", short: "KR", name: "한국어", home: "/" },
	{ code: "en", short: "EN", name: "English", home: "/en/" },
	{ code: "ja", short: "JP", name: "日本語", home: "/ja/" },
	{ code: "zh-Hans", short: "CN", name: "简体中文", home: "/zh/" }
];

export default {
	list,
	byCode: Object.fromEntries(list.map((l) => [l.code, l]))
};
