/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.jsx"],
	theme: {
		extend: {
			backgroundImage: {
				logo: "url(./src/assets/images/mobile/logo.svg)",
				/* mobile backgrounds */
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
				dsktMilkBottles:
					"url(./src/assets/images/desktop/image-gallery-milkbottles.jpg)",
				dsktCuttedOrangeFruit:
					"url(./src/assets/images/desktop/image-gallery-orange.jpg)",
				dsktSugarCubes:
					"url(./src/assets/images/desktop/image-gallery-sugarcubes.jpg)",
				dsktCone:
					"url(./src/assets/images/desktop/image-gallery-cone.jpg)",
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
