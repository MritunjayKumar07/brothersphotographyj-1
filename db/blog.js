const blogData = [
  {
    id: 1,
    title: "The Great Gatsby",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto velit aperiam numquam excepturi nobis placeat laborum obcaecati fugit, porro voluptatibus qui eligendi vero nostrum amet nesciunt ut facere ab distinctio hic neque! Voluptate aperiam saepe quis voluptatem accusamus inventore expedita quae repudiandae error dolores eaque neque, molestiae consequuntur quod! Nihil quae iste blanditiis. Accusamus ut modi fuga voluptatem consequuntur repudiandae optio ipsam quisquam soluta error amet tenetur nesciunt vitae voluptatibus, obcaecati incidunt facilis, accusantium quia. Assumenda, corrupti eum.",
    releaseDate: "21 Aug 2024",
    images: [
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1692613261673-78FXOHTNUYWSTUDZGNJQ/SHBlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1692016635494-1BGN4OHD0G7HZXAFBNPD/SSBlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1672837354177-6HON3YQX0OANULCMTFTO/AVBlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1637235263854-TQJMWTH9QUW07KQB5ARP/IMG_6853.JPG?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1637235852668-GAIK75VT2MFMCT77XAEL/SJPressFR0132.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1631180582220-3TGLDNOUOWNH80M68R77/3a.JPG?format=1000w",
    ],
  },
  {
    id: 2,
    title: "Diya + Saurav: East Meets West",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto velit aperiam numquam excepturi nobis placeat laborum obcaecati fugit, porro voluptatibus qui eligendi vero nostrum amet nesciunt ut facere ab distinctio hic neque! Voluptate aperiam saepe quis voluptatem accusamus inventore expedita quae repudiandae error dolores eaque neque, molestiae consequuntur quod! Nihil quae iste blanditiis. Accusamus ut modi fuga voluptatem consequuntur repudiandae optio ipsam quisquam soluta error amet tenetur nesciunt vitae voluptatibus, obcaecati incidunt facilis, accusantium quia. Assumenda, corrupti eum.",
    releaseDate: "21 Aug 2024",
    images: [
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609420521104-03FMTXFTIRIQQHALG7LX/SCBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609326691960-DIECNJQLKSCQSWZ7OBL8/KGBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609175478718-RGZBHFXO797CVORI79OC/SumoBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609093523996-2Z5PB8MWNJQ5BF54LYTE/VCBlog_0.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609093523996-2Z5PB8MWNJQ5BF54LYTE/VCBlog_0.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609084695053-R8DZF5NVE71L7P336ZBB/PrinnyBlog_22.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1608710204611-T98CBU2YTBUBTIMX7MG0/KCBlog_1.jpg?format=1000w",
    ],
  },
  {
    id: 3,
    title: "Shruthi + Mukunda: A Spiritual Connect",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto velit aperiam numquam excepturi nobis placeat laborum obcaecati fugit, porro voluptatibus qui eligendi vero nostrum amet nesciunt ut facere ab distinctio hic neque! Voluptate aperiam saepe quis voluptatem accusamus inventore expedita quae repudiandae error dolores eaque neque, molestiae consequuntur quod! Nihil quae iste blanditiis. Accusamus ut modi fuga voluptatem consequuntur repudiandae optio ipsam quisquam soluta error amet tenetur nesciunt vitae voluptatibus, obcaecati incidunt facilis, accusantium quia. Assumenda, corrupti eum.",
    releaseDate: "25 Aug 2023",
    images: [
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1608117906505-IM0R0RVCXHDIJHXSQIUW/SMBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1607939584650-SUMZR1VB6AU5WZQ2HOFX/SNBlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1607783083473-IDFNI7WQQ3FA7V7YYYE7/TNBlog_1.jpg?format=500w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1605451213887-GBJ3ZK0B6ULD5DKZO53M/VPBlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1607339555399-JFSFDNKWQ6TSEVZ8ZRW8/SABlog_57.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1607068992378-0WWS30H54U69B46R08WT/SCBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1606919461924-0Q9CETCMIKXC94URVI8J/PNBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1606056465135-YJ45FI2YMRLH62FE1UJG/ARBlog_42.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1605620220814-24P25JXCOJZ61GIGSWR9/SCBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1605712322022-JZCF2HMSITCOU9ELUOI2/RJBlog_1.jpg?format=1000w",
    ],
  },
  {
    id: 4,
    title: "Naina + Shubham: Go Goa Gone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto velit aperiam numquam excepturi nobis placeat laborum obcaecati fugit, porro voluptatibus qui eligendi vero nostrum amet nesciunt ut facere ab distinctio hic neque! Voluptate aperiam saepe quis voluptatem accusamus inventore expedita quae repudiandae error dolores eaque neque, molestiae consequuntur quod! Nihil quae iste blanditiis. Accusamus ut modi fuga voluptatem consequuntur repudiandae optio ipsam quisquam soluta error amet tenetur nesciunt vitae voluptatibus, obcaecati incidunt facilis, accusantium quia. Assumenda, corrupti eum.",
    releaseDate: "25 Aug 2023",
    images: [
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1605620220814-24P25JXCOJZ61GIGSWR9/SCBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1605104785091-TUD1SOUD6S2NRPCYBJPG/SSBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1604848497526-D15UG1VOUDJ14AETLATJ/RDBlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1604847701607-XM876NHOW3GYA7Q66C2L/DABlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1604678687730-KRISZINVYH52KPBD25J5/TNBlog_1.JPG?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1603353237437-YMHG7LYBZQWW96XV01MP/PNBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1603983144535-T113738EF5992ZR1C7IT/RVBlog_26.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1603562367670-FGXZQWWVYLEO6H8NNIRH/ASBlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1603710294875-O98UYYRP05RJMFWS35IL/CNBlog_1.jpg?format=750w",
    ],
  },
  {
    id: 5,
    title: "Spardha + Ashish: Bubbles weds Trouble",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto velit aperiam numquam excepturi nobis placeat laborum obcaecati fugit, porro voluptatibus qui eligendi vero nostrum amet nesciunt ut facere ab distinctio hic neque! Voluptate aperiam saepe quis voluptatem accusamus inventore expedita quae repudiandae error dolores eaque neque, molestiae consequuntur quod! Nihil quae iste blanditiis. Accusamus ut modi fuga voluptatem consequuntur repudiandae optio ipsam quisquam soluta error amet tenetur nesciunt vitae voluptatibus, obcaecati incidunt facilis, accusantium quia. Assumenda, corrupti eum.",
    releaseDate: "25 Aug 2023",
    images: [
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1603126605143-MQ80V1GYPEVAIUPQFUFT/SABlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1602853950790-D8C1C1POM5WR7O5AQL0V/APBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1602434249557-A2RFTIKL7MCDNSI2SW4J/SABlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1602423482893-R80DXYQXT74XKGTY6KC5/RCBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1602174548122-O3PMUG1TH6DCR0DZRNNQ/NABlog_47.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1602170651126-9IUURV899G0RAU2Q9J2M/CDInsta_10.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1601749838132-OX9IIYR0TQL8NHBSG83D/DTBlog_1.jpg?format=1000w",
    ],
  },
  {
    id: 6,
    title: "Naina + Shubham: Go Goa Gone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto velit aperiam numquam excepturi nobis placeat laborum obcaecati fugit, porro voluptatibus qui eligendi vero nostrum amet nesciunt ut facere ab distinctio hic neque! Voluptate aperiam saepe quis voluptatem accusamus inventore expedita quae repudiandae error dolores eaque neque, molestiae consequuntur quod! Nihil quae iste blanditiis. Accusamus ut modi fuga voluptatem consequuntur repudiandae optio ipsam quisquam soluta error amet tenetur nesciunt vitae voluptatibus, obcaecati incidunt facilis, accusantium quia. Assumenda, corrupti eum.",
    releaseDate: "25 Aug 2023",
    images: [
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1601129575939-1A8I56R1UG1GS37KOK5T/AABlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1601460352777-32RTCZPJ9H801F3DO50G/PSBlog_56.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1601289932043-59DRRLWVI3XQ6VV34KS0/TABlog_1.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1601127639059-ZRZDMWW9FOWSJ4SVPH6T/SYBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1601221231571-S7EQVJ0HHMN3EEZ6SLL6/SNInsta_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1600870164507-G1O5RUXIQDZI4JQ68R4S/PRBlog_0a.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1600860004684-F8OP04WPML28PLH98H0H/GABlog_25.jpg?format=750w",
    ],
  },
];

