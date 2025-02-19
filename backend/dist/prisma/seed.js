"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.book.deleteMany();
        // add new data
        yield prisma.book.createMany({
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
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
