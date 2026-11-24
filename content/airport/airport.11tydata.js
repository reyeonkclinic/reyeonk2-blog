// 공항에서 오시는 길: URL로만 접근하는 안내 페이지(영·일·태·중간체·중번체 한 페이지).
// 컬렉션 제외 → 글 목록·사이트맵·llms.txt·RSS에 나오지 않고, noindex로 검색 노출도 막음.
export default {
	layout: "layouts/base.njk",
	eleventyExcludeFromCollections: true,
	headExtra: '<meta name="robots" content="noindex, nofollow">',
};
