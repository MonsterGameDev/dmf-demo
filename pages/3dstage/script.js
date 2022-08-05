const stageOpeningLayers = [
    {
        id: "curtain",
        src: "./../../img/components/stage-opening/acropolis.webp",
        alt: "Acropolis Fortæppe",
    },
    {
        id: "sufit",
        src: "./../../img/components/stage-opening/top-suffit.webp",
        alt: "Sufit",
    },
    {
        id: "leftDrapery",
        src: "./../../img/components/stage-opening/left-drapery.webp",
        alt: "Left Drapery",
    },
    {
        id: "rightDrapery",
        src: './../../img/components/stage-opening/right-drapery.webp',
        alt: "Right Drapery",
    },
];

const stageOpening = document.querySelector("ph-stage-opening");
stageOpening.layers = stageOpeningLayers;