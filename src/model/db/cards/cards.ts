import {
	NormalCityBuildOptions,
	NormalCityNames,
	VacationSpotBuildOptions,
	VacationSpotNames,
	Costs,
	Infos,
} from '../../../assets/interfaces/interfaces';

class CardsDB {
	private readonly BASE_SRC = `/imgs/cards/`;

	readonly normalCityCosts: Costs<NormalCityBuildOptions, NormalCityNames> = {
		방콕: {
			land: { buy: 3, pay: 1, takeOver: 6, sell: 1.5 },
			villa: { buy: 1.5, pay: 1.5, takeOver: 3, sell: 1 },
			building: { buy: 2, pay: 2, takeOver: 4, sell: 1 },
			hotel: { buy: 3.5, pay: 3.5, takeOver: 7, sell: 2 },
			landmark: { buy: 5, pay: 11, takeOver: undefined, sell: 7.5 },
		},
		베이징: {
			land: { buy: 3, pay: 1.5, takeOver: 6, sell: 1.5 },
			villa: { buy: 3, pay: 3, takeOver: 6, sell: 1.5 },
			building: { buy: 4, pay: 4, takeOver: 8, sell: 2 },
			hotel: { buy: 6.5, pay: 7, takeOver: 13, sell: 3.5 },
			landmark: { buy: 9, pay: 22, takeOver: undefined, sell: 13 },
		},
		타이페이: {
			land: { buy: 5, pay: 2, takeOver: 10, sell: 2.5 },
			villa: { buy: 3.5, pay: 4, takeOver: 7, sell: 2 },
			building: { buy: 5.5, pay: 6, takeOver: 11, sell: 3 },
			hotel: { buy: 10, pay: 11, takeOver: 20, sell: 5 },
			landmark: { buy: 14, pay: 32, takeOver: undefined, sell: 19.5 },
		},
		두바이: {
			land: { buy: 5, pay: 3, takeOver: 10, sell: 2.5 },
			villa: { buy: 5, pay: 5.5, takeOver: 10, sell: 2.5 },
			building: { buy: 7.5, pay: 8.5, takeOver: 15, sell: 4 },
			hotel: { buy: 12.5, pay: 14, takeOver: 25, sell: 6.5 },
			landmark: { buy: 18, pay: 41.5, takeOver: undefined, sell: 24 },
		},
		카이로: {
			land: { buy: 5, pay: 3.5, takeOver: 10, sell: 2.5 },
			villa: { buy: 6, pay: 7, takeOver: 12, sell: 3 },
			building: { buy: 9, pay: 10.5, takeOver: 18, sell: 4.5 },
			hotel: { buy: 15, pay: 17.5, takeOver: 30, sell: 7.5 },
			landmark: { buy: 22, pay: 50, takeOver: undefined, sell: 28.5 },
		},
		도쿄: {
			land: { buy: 7, pay: 4, takeOver: 14, sell: 3.5 },
			villa: { buy: 7, pay: 8.5, takeOver: 14, sell: 3.5 },
			building: { buy: 10.5, pay: 12.5, takeOver: 21, sell: 5.5 },
			hotel: { buy: 17.5, pay: 21, takeOver: 35, sell: 9 },
			landmark: { buy: 23, pay: 58, takeOver: undefined, sell: 32.5 },
		},
		시드니: {
			land: { buy: 7, pay: 5, takeOver: 14, sell: 3.5 },
			villa: { buy: 8, pay: 10, takeOver: 16, sell: 4 },
			building: { buy: 11.5, pay: 14.5, takeOver: 23, sell: 6 },
			hotel: { buy: 20, pay: 24.5, takeOver: 40, sell: 10 },
			landmark: { buy: 26, pay: 66, takeOver: undefined, sell: 36.5 },
		},
		퀘백: {
			land: { buy: 8, pay: 5.5, takeOver: 16, sell: 4 },
			villa: { buy: 8.5, pay: 11, takeOver: 17, sell: 4.5 },
			building: { buy: 13, pay: 17, takeOver: 26, sell: 6.5 },
			hotel: { buy: 22, pay: 28, takeOver: 44, sell: 11 },
			landmark: { buy: 26.5, pay: 73, takeOver: undefined, sell: 39 },
		},
		상파울로: {
			land: { buy: 8, pay: 6.5, takeOver: 16, sell: 4 },
			villa: { buy: 9.5, pay: 12.5, takeOver: 19, sell: 5 },
			building: { buy: 15, pay: 20, takeOver: 30, sell: 7.5 },
			hotel: { buy: 23.5, pay: 31.5, takeOver: 47, sell: 12 },
			landmark: { buy: 27, pay: 81, takeOver: undefined, sell: 41.5 },
		},
		프라하: {
			land: { buy: 9, pay: 7, takeOver: 18, sell: 4.5 },
			villa: { buy: 10, pay: 14, takeOver: 20, sell: 5 },
			building: { buy: 15, pay: 21, takeOver: 30, sell: 7.5 },
			hotel: { buy: 25.5, pay: 35, takeOver: 51, sell: 13 },
			landmark: { buy: 27.5, pay: 85.5, takeOver: undefined, sell: 43.5 },
		},
		베를린: {
			land: { buy: 9, pay: 7.5, takeOver: 18, sell: 4.5 },
			villa: { buy: 11, pay: 15.5, takeOver: 22, sell: 5.5 },
			building: { buy: 16, pay: 23, takeOver: 32, sell: 8 },
			hotel: { buy: 26.5, pay: 38.5, takeOver: 53, sell: 13 },
			landmark: { buy: 28, pay: 90.5, takeOver: undefined, sell: 45 },
		},
		모스크바: {
			land: { buy: 9, pay: 8.5, takeOver: 18, sell: 4.5 },
			villa: { buy: 11.5, pay: 17, takeOver: 23, sell: 6 },
			building: { buy: 16.5, pay: 25, takeOver: 33, sell: 8 },
			hotel: { buy: 28, pay: 42, takeOver: 56, sell: 14 },
			landmark: { buy: 28.5, pay: 95.5, takeOver: undefined, sell: 46 },
		},
		제네바: {
			land: { buy: 10, pay: 9, takeOver: 20, sell: 5 },
			villa: { buy: 11.5, pay: 18, takeOver: 23, sell: 6 },
			building: { buy: 17.5, pay: 27, takeOver: 35, sell: 8.5 },
			hotel: { buy: 29, pay: 43.5, takeOver: 58, sell: 14.5 },
			landmark: { buy: 29, pay: 97, takeOver: undefined, sell: 48 },
		},
		로마: {
			land: { buy: 10, pay: 10, takeOver: 20, sell: 5 },
			villa: { buy: 12, pay: 19.5, takeOver: 24, sell: 6 },
			building: { buy: 18, pay: 29.5, takeOver: 36, sell: 9 },
			hotel: { buy: 30.5, pay: 45, takeOver: 61, sell: 15 },
			landmark: { buy: 30, pay: 99, takeOver: undefined, sell: 50 },
		},
		런던: {
			land: { buy: 11, pay: 10.5, takeOver: 16, sell: 5.5 },
			villa: { buy: 12.5, pay: 21, takeOver: 32, sell: 6.5 },
			building: { buy: 18.5, pay: 31.5, takeOver: 44, sell: 9 },
			hotel: { buy: 30.5, pay: 45, takeOver: 72, sell: 15 },
			landmark: { buy: 30.5, pay: 100, takeOver: undefined, sell: 51.5 },
		},
		파리: {
			land: { buy: 11, pay: 10, takeOver: 22, sell: 5.5 },
			villa: { buy: 12.5, pay: 22.5, takeOver: 25, sell: 6.5 },
			building: { buy: 18.5, pay: 33.5, takeOver: 37, sell: 9 },
			hotel: { buy: 31, pay: 46.5, takeOver: 62, sell: 15.5 },
			landmark: { buy: 31, pay: 101, takeOver: undefined, sell: 52 },
		},
		뉴욕: {
			land: { buy: 13, pay: 12, takeOver: 26, sell: 6.5 },
			villa: { buy: 13, pay: 24, takeOver: 26, sell: 6.5 },
			building: { buy: 19, pay: 36, takeOver: 38, sell: 9.5 },
			hotel: { buy: 31.5, pay: 47, takeOver: 63, sell: 15.5 },
			landmark: { buy: 31.5, pay: 102, takeOver: undefined, sell: 54 },
		},
		서울: {
			land: { buy: 13, pay: 12.5, takeOver: 26, sell: 6.5 },
			villa: { buy: 13, pay: 25, takeOver: 26, sell: 6.5 },
			building: { buy: 19, pay: 38, takeOver: 38, sell: 9.5 },
			hotel: { buy: 32, pay: 48, takeOver: 64, sell: 16 },
			landmark: { buy: 32, pay: 111, takeOver: undefined, sell: 54.5 },
		},
	};

	readonly vacationSpotCosts: Costs<
		VacationSpotBuildOptions,
		VacationSpotNames
	> = {
		독도: {
			flag: {
				buy: 10,
				pay: 8,
				sell: 5,
				takeOver: undefined,
			},
			parasol: {
				pay: 16,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
			bangalore: {
				pay: 32,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
		},
		발리: {
			flag: {
				buy: 10,
				pay: 8,
				sell: 5,
				takeOver: undefined,
			},
			parasol: {
				pay: 16,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
			bangalore: {
				pay: 32,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
		},
		하와이: {
			flag: {
				buy: 10,
				pay: 8,
				sell: 5,
				takeOver: undefined,
			},
			parasol: {
				pay: 16,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
			bangalore: {
				pay: 32,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
		},
		푸켓: {
			flag: {
				buy: 10,
				pay: 8,
				sell: 5,
				takeOver: undefined,
			},
			parasol: {
				pay: 16,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
			bangalore: {
				pay: 32,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
		},
		타히티: {
			flag: {
				buy: 10,
				pay: 8,
				sell: 5,
				takeOver: undefined,
			},
			parasol: {
				pay: 16,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
			bangalore: {
				pay: 32,
				sell: 5,
				takeOver: undefined,
				buy: undefined,
			},
		},
	};

	readonly normalCityInfos: Infos<NormalCityNames> = {
		방콕: {
			id: 1,
			line: '1',
			color: 'green',
			isVacationSpot: false,
			name: '방콕',
			src: this.BASE_SRC + '1.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		베이징: {
			id: 2,
			line: '1',
			color: 'green',
			isVacationSpot: false,
			name: '베이징',
			src: this.BASE_SRC + '2.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		타이페이: {
			id: 4,
			line: '1',
			color: 'dark-green',
			isVacationSpot: false,
			name: '타이페이',
			src: this.BASE_SRC + '4.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		두바이: {
			id: 5,
			line: '1',
			color: 'dark-green',
			isVacationSpot: false,
			name: '두바이',
			src: this.BASE_SRC + '5.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		카이로: {
			id: 6,
			line: '1',
			color: 'dark-green',
			isVacationSpot: false,
			name: '카이로',
			src: this.BASE_SRC + '6.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		도쿄: {
			id: 8,
			line: '2',
			color: 'blue',
			isVacationSpot: false,
			name: '도쿄',
			src: this.BASE_SRC + '8.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		시드니: {
			id: 9,
			line: '2',
			color: 'blue',
			isVacationSpot: false,
			name: '시드니',
			src: this.BASE_SRC + '9.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		퀘백: {
			id: 10,
			line: '2',
			color: 'dark-blue',
			isVacationSpot: false,
			name: '퀘백',
			src: this.BASE_SRC + '10.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		상파울로: {
			id: 12,
			line: '2',
			color: 'dark-blue',
			isVacationSpot: false,
			name: '상파울로',
			src: this.BASE_SRC + '12.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		프라하: {
			id: 13,
			line: '3',
			color: 'pink',
			isVacationSpot: false,
			name: '프라하',
			src: this.BASE_SRC + '13.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		베를린: {
			id: 15,
			line: '3',
			color: 'pink',
			isVacationSpot: false,
			name: '베를린',
			src: this.BASE_SRC + '15.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		모스크바: {
			id: 16,
			line: '3',
			color: 'purple',
			isVacationSpot: false,
			name: '모스크바',
			src: this.BASE_SRC + '16.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		제네바: {
			id: 17,
			line: '3',
			color: 'purple',
			isVacationSpot: false,
			name: '제네바',
			src: this.BASE_SRC + '17.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		로마: {
			id: 18,
			line: '3',
			color: 'purple',
			isVacationSpot: false,
			name: '로마',
			src: this.BASE_SRC + '18.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		런던: {
			id: 20,
			line: '4',
			color: 'orange',
			isVacationSpot: false,
			name: '런던',
			src: this.BASE_SRC + '20.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		파리: {
			id: 21,
			line: '4',
			color: 'orange',
			isVacationSpot: false,
			name: '파리',
			src: this.BASE_SRC + '21.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		뉴욕: {
			id: 22,
			line: '4',
			color: 'red',
			isVacationSpot: false,
			name: '뉴욕',
			src: this.BASE_SRC + '22.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		서울: {
			id: 23,
			line: '4',
			color: 'red',
			isVacationSpot: false,
			name: '서울',
			src: this.BASE_SRC + '23.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
	};
	readonly vacationSpotInfos: Infos<VacationSpotNames> = {
		독도: {
			id: 3,
			line: '1',
			color: 'light-blue',
			isVacationSpot: true,
			name: '독도',
			src: this.BASE_SRC + '3.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		발리: {
			id: 7,
			line: '2',
			color: 'light-pink',
			isVacationSpot: true,
			name: '발리',
			src: this.BASE_SRC + '7.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
		하와이: {
			id: 11,
			line: '2',
			color: 'light-blue',
			isVacationSpot: true,
			name: '하와이',
			src: this.BASE_SRC + '11.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},

		푸켓: {
			id: 14,
			line: '3',
			color: 'light-blue',
			isVacationSpot: true,
			name: '푸켓',
			src: this.BASE_SRC + '14.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},

		타히티: {
			id: 19,
			line: '4',
			color: 'light-pink',
			isVacationSpot: true,
			name: '타히티',
			src: this.BASE_SRC + '19.jpg',
			belonged: false,
			isFestival: false,
			olympicPhase: 0,
		},
	};
}

export default CardsDB;
