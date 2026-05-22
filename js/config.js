class Config {

	constructor() {
		this.getQuickSearchData = this.getQuickSearchData.bind(this);
		this.getSearchEngines = this.getSearchEngines.bind(this);
		this.getWebSites = this.getWebSites.bind(this);
		this.getDockSites = this.getDockSites.bind(this);
	}

	getQuickSearchData = () => {
		const quickSearchData = {
			'r/': {
				urlPrefix: 'https://reddit.com/r/'
			},
			'w/': {
				urlPrefix: 'https://wikipedia.org/wiki/'
			},
			'u/': {
				urlPrefix: 'https://unsplash.com/s/photos/'
			},
			'a/': {
				urlPrefix: 'https://amazon.com/s?k='
			},
			'e/': {
				urlPrefix: 'https://ebay.com/sch/?_nkw='
			},
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			},
			'p/': {
				urlPrefix: 'https://pinterest.com/search/pins/?q='
			},
			'f/': {
				urlPrefix: 'https://www.asos.com/search/?q='
			}
		};

		return quickSearchData;
	}

	getSearchEngines = () => {

		const searchEngines = {
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q='
			},
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q='
			},
			'ecosia': {
				name: 'Ecosia',
				prefix: 'https://www.ecosia.org/search?q='
			},
			'yahoo': {
				name: 'Yahoo',
				prefix: 'https://search.yahoo.com/search?p='
			},
			'bing': {
				name: 'Bing',
				prefix: 'https://www.bing.com/search?q='
			}
		};

		return searchEngines;
	}

	getWebSites = () => {

		const webSites = [

			{
				site: 'Pinterest',
				icon: 'pinterest',
				url: 'https://pinterest.com/',
				category: 'fashion'
			},
			{
				site: 'ASOS',
				icon: 'asos',
				url: 'https://asos.com/',
				category: 'fashion'
			},
			{
				site: 'H&M',
				icon: 'instagram',
				url: 'https://hm.com/',
				category: 'fashion'
			},
			{
				site: 'Zara',
				icon: 'zara',
				url: 'https://zara.com/',
				category: 'fashion'
			},
			{
				site: 'YesStyle',
				icon: 'yesstyle',
				url: 'https://yesstyle.com/',
				category: 'fashion'
			},
			{
				site: 'Depop',
				icon: 'instagram',
				url: 'https://depop.com/',
				category: 'fashion'
			},
			{
				site: 'Uniqlo',
				icon: 'instagram',
				url: 'https://uniqlo.com/',
				category: 'fashion'
			},
			{
				site: 'Cider',
				icon: 'instagram',
				url: 'https://shopcider.com/',
				category: 'fashion'
			},
			{
				site: 'Teen Vogue',
				icon: 'instagram',
				url: 'https://www.teenvogue.com/style',
				category: 'fashion'
			},
			{
				site: 'Lookbook',
				icon: 'instagram',
				url: 'https://lookbook.nu/',
				category: 'fashion'
			},
			{
				site: 'Khan Academy',
				icon: 'google',
				url: 'https://www.khanacademy.org/',
				category: 'education'
			},
			{
				site: 'Coursera',
				icon: 'google',
				url: 'https://www.coursera.org/',
				category: 'education'
			},
			{
				site: 'Duolingo',
				icon: 'google',
				url: 'https://www.duolingo.com/',
				category: 'education'
			},
			{
				site: 'TED-Ed',
				icon: 'youtube',
				url: 'https://ed.ted.com/',
				category: 'education'
			},
			{
				site: 'National Geographic Kids',
				icon: 'google',
				url: 'https://kids.nationalgeographic.com/',
				category: 'education'
			},
			{
				site: 'Brilliant',
				icon: 'google',
				url: 'https://brilliant.org/',
				category: 'education'
			},
			{
				site: 'Codecademy',
				icon: 'github',
				url: 'https://www.codecademy.com/',
				category: 'development'
			},
			{
				site: 'Scratch',
				icon: 'github',
				url: 'https://scratch.mit.edu/',
				category: 'development'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'Gitlab',
				icon: 'gitlab',
				url: 'https://gitlab.com/',
				category: 'development'
			},
			{
				site: 'Bitbucket',
				icon: 'bitbucket',
				url: 'https://bitbucket.org/',
				category: 'development'
			},
			{
				site: 'Replit',
				icon: 'github',
				url: 'https://replit.com/',
				category: 'development'
			},
			{
				site: 'freeCodeCamp',
				icon: 'github',
				url: 'https://www.freecodecamp.org/',
				category: 'development'
			},
			{
				site: 'W3Schools',
				icon: 'github',
				url: 'https://www.w3schools.com/',
				category: 'development'
			},
			{
				site: 'Tinkercad',
				icon: 'tinkercad',
				url: 'https://www.tinkercad.com/',
				category: 'development'
			},
			{
				site: 'Hack Club',
				icon: 'github',
				url: 'https://hackclub.com/',
				category: 'development'
			},
			{
				site: 'Canva',
				icon: 'figma',
				url: 'https://www.canva.com/',
				category: 'design'
			},
			{
				site: 'Pixilart',
				icon: 'deviantart',
				url: 'https://www.pixilart.com/',
				category: 'design'
			},
			{
				site: 'Deviantart',
				icon: 'deviantart',
				url: 'https://deviantart.com/',
				category: 'design'
			},
			{
				site: 'Figma',
				icon: 'figma',
				url: 'https://figma.com/',
				category: 'design'
			},
			{
				site: 'Sketchfab',
				icon: 'figma',
				url: 'https://sketchfab.com/',
				category: 'design'
			},
			{
				site: 'Coolors',
				icon: 'figma',
				url: 'https://coolors.co/',
				category: 'design'
			},
			{
				site: 'Unsplash',
				icon: 'unsplash',
				url: 'https://unsplash.com/',
				category: 'design'
			},
			{
				site: 'ArtStation',
				icon: 'deviantart',
				url: 'https://www.artstation.com/',
				category: 'design'
			},
			{
				site: 'Wattpad',
				icon: 'reddit',
				url: 'https://www.wattpad.com/',
				category: 'reading'
			},
			{
				site: 'Goodreads',
				icon: 'reddit',
				url: 'https://www.goodreads.com/',
				category: 'reading'
			},
			{
				site: 'Medium',
				icon: 'reddit',
				url: 'https://medium.com/',
				category: 'reading'
			},
			{
				site: 'Notion',
				icon: 'google',
				url: 'https://www.notion.so/',
				category: 'productivity'
			},
			{
				site: 'Chess.com',
				icon: 'google',
				url: 'https://www.chess.com/',
				category: 'games'
			},
			{
				site: 'GeoGuessr',
				icon: 'google',
				url: 'https://www.geoguessr.com/',
				category: 'games'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},
			{
				site: 'Spotify',
				icon: 'spotify',
				url: 'https://spotify.com/',
				category: 'media'
			},
			{
				site: 'Netflix',
				icon: 'netflix',
				url: 'https://netflix.com/',
				category: 'media'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/',
				category: 'social'
			},
			{
				site: 'Instagram',
				icon: 'instagram',
				url: 'https://instagram.com/',
				category: 'social'
			},
			{
				site: 'Facebook',
				icon: 'facebook',
				url: 'https://facebook.com/',
				category: 'social'
			},
			{
				site: 'Messenger',
				icon: 'messenger',
				url: 'https://messenger.com/',
				category: 'social'
			},
			{
				site: 'Twitter',
				icon: 'twitter',
				url: 'https://twitter.com/',
				category: 'social'
			},
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{
				site: 'Google',
				icon: 'google',
				url: 'https://google.com/',
				category: 'search'
			},
			{
				site: 'Duckduckgo',
				icon: 'duckduckgo',
				url: 'https://duckduckgo.com/',
				category: 'search'
			},
			{
				site: 'Ecosia',
				icon: 'ecosia',
				url: 'https://ecosia.org/',
				category: 'search'
			},
			{
				site: 'Wikipedia',
				icon: 'wikipedia',
				url: 'https://wikipedia.org/',
				category: 'information'
			},
			{
				site: 'Gmail',
				icon: 'gmail',
				url: 'https://mail.google.com/',
				category: 'social'
			},
			{
				site: 'GDrive',
				icon: 'gdrive',
				url: 'https://drive.google.com/',
				category: 'cloud'
			},
			{
				site: 'MEGA',
				icon: 'mega',
				url: 'https://mega.nz/',
				category: 'cloud'
			},
			{
				site: 'Amazon',
				icon: 'amazon',
				url: 'https://amazon.com/',
				category: 'shop'
			},
			{
				site: 'Ebay',
				icon: 'ebay',
				url: 'https://ebay.com/',
				category: 'shop'
			}
		];

		return webSites;
	}

	getDockSites = () => {

		const dockSites = [
			{
				site: 'Pinterest',
				icon: 'pinterest',
				url: 'https://pinterest.com/'
			},
			{
				site: 'Instagram',
				icon: 'instagram',
				url: 'https://instagram.com/'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/'
			},
			{
				site: 'Spotify',
				icon: 'spotify',
				url: 'https://spotify.com/'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/'
			},
			{
				site: 'Google',
				icon: 'google',
				url: 'https://google.com/'
			},
			{
				site: 'Gmail',
				icon: 'gmail',
				url: 'https://mail.google.com/'
			},
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/'
			}
		];

		return dockSites;
	}
}
