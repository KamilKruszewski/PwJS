var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl',function($scope) {
$scope.galleries = [
		{ "title":"Parasite",
			"when":"2020",
			"ocena":"8,6",
			"thumbnailUrl":"pict/ang/kol1.jpg"
		},
		{  "title":"Kształ wody",
			"when":"2018",
			"ocena":"7,3",
			"thumbnailUrl":"pict/ang/kol3.jpg"
		},
		{ "title":"Spotlight",
			"when":"2016",
			"ocena":"8,1",
			"thumbnailUrl":"pict/ang/kol5.jpg"
		},
		{  "title":"Greenboon",
			"when":"2019",
			"ocena":"8,2",
			"thumbnailUrl":"pict/ang/kol2.jpg"
		},
		{ "title":"Moonlight",
			"when":"2017",
			"ocena":"7,4",
			"thumbnailUrl":"pict/ang/kol4.jpg"
		},
		{  "title":"Birdman",
			"when":"2015",
			"ocena":"7,7",
			"thumbnailUrl":"pict/ang/kol6.jpg"
		},
		];
		$scope.length=Object.keys($scope.galleries).length;
		$scope.sortList = [
		{
			'label':'Alfabetycznie',
			'value':'title'
		},
		{
			'label':'Najstarsze',
			'value':'when'
		},
		{
			'label':'Najnowsze',
			'value':'-when'
			},
		{
			'label':'Najwyzej ocenione*',
			'value':'-ocena'
			}
		];

		$scope.orderProp = 'when';
});
