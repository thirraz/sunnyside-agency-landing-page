/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.jsx"],
	theme: {
		extend: {
			backgroundImage: {
				logo: "url(./src/assets/images/mobile/logo.svg)",
				/* mobile backgrounds */
				mbCone: "url(./src/assets/images/mobile/image-gallery-cone.jpg)",
				mbmilkBottles:
					"url(./src/assets/images/mobile/image-gallery-milkbottles.jpg.jpg)",
				mbCuttedOrangeFruit:
					"url(./src/assets/images/mobile/image-gallery-orange.jpg)",
				mbSucarCubes:
					"url(./src/assets/images/mobile/image-gallery-sugar-cubes.jpg)",
				mbCherries:
					"url(./src/assets/images/mobile/image-graphic-design.jpg)",
				mbHeader:
					"url(./src/assets/images/mobile/image-header.jpg)",
				mbOrangeFruit:
					"url(./src/assets/images/mobile/image-photography.jpg)",
				mbPinkCup:
					"url(./src/assets/images/mobile/image-stand-out.jpg)",
				mbEgg: "url(./src/assets/images/mobile/image-transform.jpg)",
				/* desktop backgrounds */
				dsktHeader:
					"url(./src/assets/images/desktop/image-header.jpg)",
				dsktEgg: "url(./src/assets/images/desktop/image-transform.jpg)",
				dsktPinkCup:
					"url(./src/assets/images/desktop/image-stand-out.jpg)",
				dsktCherries:
					"url(./src/assets/images/desktop/image-graphic-design.jpg)",
				dsktOrangeFruit:
					"url(./src/assets/images/desktop/image-photography.jpg)",
			},
			colors: {
				lightBlue: "#3EBFFF",
				yellow: "#FFD200",
				pink: "#FE6F61",
			},
			fontFamily: {
				Barlow: '"Barlow", sans-serif',
				Fraunces: '"Fraunces", serif',
			},
		},
	},

	plugins: [],
};
