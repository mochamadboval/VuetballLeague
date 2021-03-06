# Vuetball League

Kode sumber untuk situs web bertema Liga Sepak Bola. Dibangun menggunakan [Vue](https://vuejs.org/) dan kode sumber [Football League](https://github.com/mochamadboval/FootballLeague).

## Install

1. Unduh repositori ini.
2. Daftar akun [API-Football](https://dashboard.api-football.com/) lalu ambil _API Key_ pada **Dashboard** > **Account** > **MyAccess**.
3. Buat berkas **config.js** di **src/assets/** lalu isi dengan kode berikut dan ubah **YOUR_API_KEY** dengan _API Key_ milikmu:
```javascript
// Base API
export const API_FOOTBALL = "https://v3.football.api-sports.io";
export const API_KEY = {
  headers: {
    "x-apisports-key": "YOUR_API_KEY"
  }
};

// Query
const SEASON = 2020;
const LEAGUE = 39; // Premier League
const RANGE = 10;

// Endpoints
export const FIXTURES = `/fixtures?season=${SEASON}&league=${LEAGUE}&status=ns&next=${RANGE}`;
export const LIVESCORES = `/fixtures?live=${LEAGUE}-0`;
// export const LIVESCORES = `/fixtures?live=all`; // For testing
export const RESULTS = `/fixtures?season=${SEASON}&league=${LEAGUE}&status=ft&last=${RANGE}`;
export const STANDINGS = `/standings?season=${SEASON}&league=${LEAGUE}`;
export const TEAMS = `/teams?season=${SEASON}&league=${LEAGUE}`;
export const TEAM = `/teams?id=`;
export const TEAM_FIXTURES = `/fixtures?season=${SEASON}&league=${LEAGUE}&team=`;
export const MATCH = `/fixtures?id=`;

```
4. Buka Terminal pada folder ini dan eksekusi perintah berikut untuk menginstal paket-paket **npm** (pastikan [Node.js](https://nodejs.org/) sudah terinstal):
```bash
npm install
```
5. Jalankan dengan perintah berikut:
```bash
npm run serve # For development
npm run build # For production
```
6. Gunakan perintah berikut untuk memperbaiki dan merapikan kode di semua berkas:
```bash
npm run lint
```
7. Setiap halaman melakukan satu panggilan API, kecuali **Detail Tim** yang melakukan dua panggilan.

## Known Issue
- Halaman yang menggunakan _Dynamic Matching Route_, yaitu **team** dan **match** memunculkan pesan _error_ pada konsol ketika diakses. Namun, data tetap berhasil tampil.

## License

[MIT License](LICENSE)
