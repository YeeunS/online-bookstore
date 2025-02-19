# 📚 온라인 서점 웹 애플리케이션

이 프로젝트는 Next.js를 사용한 프론트엔드와 Express.js + Prisma를 활용한 백엔드로 구축된 풀스택 온라인 서점 웹 애플리케이션입니다. 사용자는 도서를 조회, 추가, 수정 및 삭제할 수 있습니다.

## 🚀 프로젝트 설정 및 실행 가이드

### 1. 📦 필수 사항

프로젝트를 시작하기 전에 다음이 설치되어 있는지 확인해야합니다:

- [Node.js](https://nodejs.org/) (v16 이상 권장)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) 또는 선호하는 코드 편집기
- [PostgreSQL](https://www.postgresql.org/) 데이터베이스 (Supabase 권장)

### 2. 📥 레포지토리 클론

```sh
 git clone https://github.com/your-repo-name.git
 cd your-repo-name
```

### 3. ⚙️ 백엔드 설정

#### 3.1 백엔드 디렉토리로 이동

```sh
cd backend
```

#### 3.2 의존성 설치

```sh
npm install
```

#### 3.3 환경 변수 설정

`backend` 디렉토리에 `.env` 파일을 생성하고 다음을 추가해야 합니다:

```env
DATABASE_URL="postgresql://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DATABASE_NAME>"
PORT=5001
```

🔹 Supabase를 사용할 경우, **Supabase 대시보드 → Database → Connection String**에서 연결 정보를 복사하여 입력하세요.

#### 3.4 Prisma 초기화 및 마이그레이션 적용

```sh
npx prisma generate
npx prisma migrate deploy
```

최초 설정 시:

```sh
npx prisma migrate reset
```

#### 3.5 백엔드 서버 실행

```sh
npm run dev
```

서버는 `http://localhost:5001`에서 실행됩니다.

---

### 4. 🖥️ 프론트엔드 설정

#### 4.1 프론트엔드 디렉토리로 이동

```sh
cd ../frontend
```

#### 4.2 의존성 설치

```sh
npm install
```

#### 4.3 개발 서버 실행

```sh
npm run dev
```

기본적으로 애플리케이션은 `http://localhost:3000`에서 실행됩니다.

---

### 5. 🚀 배포 가이드

#### 5.1 백엔드 배포

1. [Render](https://render.com/) 을 사용하여 백엔드를 배포되었습니다.
2. 배포된 환경에서 `DATABASE_URL`이 올바르게 설정되었는지 확인하세요.
3. 배포된 서버에서 마이그레이션을 적용하세요:
   ```sh
   npx prisma migrate deploy
   ```

#### 5.2 프론트엔드 배포

1. [Vercel](https://vercel.com/) 사용하여 프론트엔드를 배포되었습니다.
2. `.env.local` 파일에 백엔드 API URL을 설정하세요:
   ```env
   NEXT_PUBLIC_API_URL="https://your-backend-url.com"
   ```
3. 프로덕션 빌드를 실행하세요:
   ```sh
   npm run build
   ```
   이후 배포하면 완료됩니다.

---

### 6. 📌 API 엔드포인트

#### **Books API** (`/api/books`)

| 메서드    | 엔드포인트        | 설명       |
| ------ | ------------ | -------- |
| GET    | `/books`     | 모든 도서 조회 |
| GET    | `/books/:id` | 특정 도서 조회 |
| POST   | `/books`     | 도서 추가    |
| PUT    | `/books/:id` | 도서 정보 수정 |
| DELETE | `/books/:id` | 도서 삭제    |

---

### 7. 🛠️ 문제 해결

#### 7.1 데이터베이스 연결 문제

만약 다음과 같은 오류가 발생하면:

```sh
Error: P1001: Can't reach database server at `<HOST>:5432`
```

- 데이터베이스가 실행 중인지 확인하세요.
- Supabase를 사용할 경우, 데이터베이스가 **Hibernate 모드**인지 확인하세요.
- `ping <HOST>` 명령어로 네트워크 연결을 확인하세요.

#### 7.2 Prisma 오류

마이그레이션이 실패하면 다음 명령어를 실행하세요:

```sh
npx prisma migrate reset
```

---

### 8. URL Address

- Backend: `https://online-bookstore-194l.onrender.com`
- Frontend: `https://bookstore-iota-hazel.vercel.app`

---

### 9. 👨‍💻 기여자

- **Yeeun Shin** ([@YeeunS](https://github.com/YeeunS))

문제가 발생하면 [Issue](https://github.com/online-bookstore/issues)를 생성하거나 PR을 제출해주세요.

---

### 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

