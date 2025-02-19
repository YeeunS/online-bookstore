import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.book.deleteMany();

  // add new data
  await prisma.book.createMany({
    data: [
      { title: "데미안", author: "헤르만 헤세" },
      { title: "나미야 잡화점의 기적", author: "히가시노 게이고" },
      { title: "미움받을 용기", author: "기시미 이치로, 고가 후미타케" },
      { title: "멋진 신세계", author: "올더스 헉슬리" },
      { title: "정의란 무엇인가", author: "마이클 샌델" },
      { title: "지적 대화를 위한 넓고 얕은 지식", author: "채사장" },
      { title: "트렌드 코리아 2024", author: "김난도 외" },
      { title: "아몬드", author: "손원평" },
      { title: "종의 기원", author: "정유정" },
      { title: "쇼코의 미소", author: "최은영" },
    ],
  });

  console.log("success to add new data and delete the duplicated data!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
