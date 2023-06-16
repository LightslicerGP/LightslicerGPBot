module.exports = [
  {
    name: "animal",
    code: `
    $clientTyping
    $reply[$messageID;true]



    $color[#ffff80]
    $title[
List of animals you can do:
-Dogs
-Cats
-Birds
    ]
    $description[
        Enjoy!
    ]
    `,
  },
  {
    name: "animal dog",
    code: `
    $clientTyping
    $reply[$messageID;true]



    $color[#ffff80]
    $title[
        Here is your dog picture and fact!
    ]
    $description[
        $jsonRequest[https://some-random-api.ml/animal/dog;fact;rip theres no dog fact]
    ]
    $image[
        $jsonRequest[https://some-random-api.ml/animal/dog;image;rip theres no dog picture]
    ]
    `,
  },
  {
    name: "animal cat",
    code: `
    $clientTyping
    $reply[$messageID;true]



    $color[#ffff80]
    $title[
        Here is your cat picture
    ]
    $description[
        $jsonRequest[https://some-random-api.ml/animal/cat;fact;rip theres no cat fact]
    ]
    $image[
        $jsonRequest[https://some-random-api.ml/animal/cat;image;rip theres no cat picture]
    ]
    `,
  },
  {
    name: "animal bird",
    code: `
    $clientTyping
    $reply[$messageID;true]



    $color[#ffff80]
    $title[
        Here is your bird picture
    ]
    $description[
        $jsonRequest[https://some-random-api.ml/animal/bird;fact;rip theres no bird fact]
    ]
    $image[
        $jsonRequest[https://some-random-api.ml/animal/bird;image;rip theres no bird picture]
    ]
    `,
  },
];
