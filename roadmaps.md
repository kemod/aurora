# Aurora Roadmap

> **Aurora — platform pengalaman pernikahan digital dari Auctore yang membantu pasangan mempersiapkan dan mengelola pernikahan dengan lebih mudah, nyaman, dan bermakna.**

---

# Table of Contents

- [Project Overview](#project-overview)
- [Vision](#vision)
- [Product Principles](#product-principles)
- [Engineering Principles](#engineering-principles)
- [Technology Stack](#technology-stack)
- [Repository Structure](#repository-structure)
- [Git Workflow](#git-workflow)
- [Development Status](#development-status)
- [Sprint 0 — Foundation](#sprint-0--foundation)
- [Sprint 1 — Identity](#sprint-1--identity)
- [Sprint 2 — Wedding Domain](#sprint-2--wedding-domain)
- [Sprint 3 — Invitation Builder](#sprint-3--invitation-builder)
- [Sprint 4 — Guest & RSVP](#sprint-4--guest--rsvp)
- [Sprint 5 — Wedding Gift](#sprint-5--wedding-gift)
- [Sprint 6 — Closed Beta](#sprint-6--closed-beta)
- [Sprint 7 — Public Launch](#sprint-7--public-launch)
- [Release Strategy](#release-strategy)
- [Definition of Done](#definition-of-done)
- [Changelog](#changelog)

---

# Project Overview

**Project:** Aurora

**Organization:** Auctore

**Repository:** `aurora`

**Repository Visibility:** Public

**Current Version:** `0.1.0`

**Current Phase:** Building

**Current Sprint:** Sprint 2 — Wedding Domain

**Current Task:** Task 2B — Couple & Wedding Profile

**Status:** 🟡 In Progress

---

# Vision

Aurora dibangun sebagai platform pengalaman pernikahan digital yang membantu pasangan mempersiapkan, mengelola, dan membagikan pengalaman pernikahan dengan lebih mudah, nyaman, dan bermakna.

Aurora tidak hanya berfokus pada undangan digital.

Tujuan jangka panjang Aurora adalah menjadi platform yang menghubungkan berbagai kebutuhan pasangan dan tamu dalam satu pengalaman digital yang sederhana.

---

# Product Principles

## 1. Melayani dan Memberdayakan

Aurora harus membantu pasangan, termasuk pasangan dengan budget terbatas, mendapatkan pengalaman pernikahan digital yang berkualitas.

## 2. Simplicity First

Kompleksitas internal tidak boleh menjadi kompleksitas bagi pengguna.

## 3. Customer First

Setiap fitur harus menyelesaikan masalah nyata pengguna.

## 4. Trust First

Keamanan, privasi, dan keandalan merupakan bagian dari produk, bukan fitur tambahan.

## 5. Build Before Over-Engineering

Jangan membangun abstraksi atau sistem kompleks sebelum kebutuhan nyata muncul.

## 6. Sustainable Business

Aurora tetap merupakan bisnis.

Model bisnis harus memungkinkan produk berkembang tanpa mengorbankan misi untuk melayani pengguna dengan budget terbatas.

## 7. Accessibility

Pengalaman Aurora harus tetap dapat digunakan oleh pasangan dengan berbagai tingkat kemampuan teknologi dan kondisi ekonomi.

---

# Engineering Principles

## Don't Impress Engineers

Kode dibuat untuk menghasilkan produk yang baik, bukan sekadar terlihat kompleks.

## Simplicity Is A Competitive Advantage

Jika dua solusi menghasilkan hasil yang sama, pilih solusi yang lebih sederhana.

## Every Bug Is A Broken Promise

Bug diperlakukan sebagai masalah kualitas yang harus dipahami dan diperbaiki, bukan sekadar gangguan teknis.

## Security By Default

Sistem harus aman sejak awal dan tidak bergantung pada asumsi bahwa pengguna akan selalu bertindak dengan benar.

## Measure Before Optimizing

Jangan melakukan optimisasi berdasarkan asumsi.

## Delete Without Regret

Fitur, dependency, atau abstraction yang tidak lagi memiliki nilai harus dapat dihapus.

## Ship, Listen, Improve

Aurora harus terus belajar dari penggunaan nyata.

---

# Technology Stack

## Core

- TypeScript
- Node.js
- PNPM
- Turborepo

## Frontend

- Next.js
- React
- Tailwind CSS

## Backend / CMS

- Payload CMS

## Database

- PostgreSQL 17

## Caching / Infrastructure

- Redis
- Docker
- Docker Compose
- WSL 2 untuk development Windows

## Email Development

- Mailpit

## Testing

- Unit Testing
- Integration Testing
- End-to-End Testing

## CI/CD

- GitHub Actions

---

# Repository Structure

```text
aurora/

│
├── apps/
│   ├── web/
│   ├── admin/
│   └── docs/
│
├── packages/
│
├── docs/
│
├── .github/
│
├── .gitignore
├── .env.example
├── docker-compose.yml
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── roadmaps.md
└── turbo.json
```

---

# Git Workflow

Aurora menggunakan Git-based workflow sederhana dengan dua jenis branch:

- `main`
- `feature/*`

## Branch Structure

```text
main
 │
 ├── feature/*
 ├── feature/*
 └── feature/*
 ```

 ---

 # Development Status

**Current Phase:** Building

**Current Sprint:** Sprint 2 — Wedding Domain

**Current Task:** Task 2B — Couple & Wedding Profile

**Overall Status:** 🟡 In Progress

## Sprint Status

| Sprint | Name | Status |
|---|---|---|
| Sprint 0 | Foundation | 🟢 Completed |
| Sprint 1 | Identity | 🟢 Completed |
| Sprint 2 | Wedding Domain | 🟡 In Progress |
| Sprint 3 | Invitation Builder | ⚪ Not Started |
| Sprint 4 | Guest & RSVP | ⚪ Not Started |
| Sprint 5 | Wedding Gift | ⚪ Not Started |
| Sprint 6 | Closed Beta | ⚪ Not Started |
| Sprint 7 | Public Launch | ⚪ Not Started |

## Current Progress

```text
Sprint 0 — Foundation
🟢 Completed

Sprint 1 — Identity
🟢 Completed

Sprint 2 — Wedding Domain
🟡 In Progress
├── Task 2A — Wedding Collection
│   🟢 Completed
└── Task 2B — Couple & Wedding Profile
    🟡 Current

Sprint 3 — Invitation Builder
⚪ Not Started

Sprint 4 — Guest & RSVP
⚪ Not Started

Sprint 5 — Wedding Gift
⚪ Not Started

Sprint 6 — Closed Beta
⚪ Not Started

Sprint 7 — Public Launch
⚪ Not Started
```

---

# Sprint 0 — Foundation

**Status:** 🟢 Completed

Sprint 0 berfokus pada pembangunan fondasi teknis Aurora sebelum pengembangan fitur produk dimulai.

Tujuan utama sprint ini adalah memastikan repository, development environment, application structure, database, dan tooling dasar siap digunakan untuk pengembangan berkelanjutan.

### Completed

- Repository Aurora dibuat
- Project version `0.1.0` ditetapkan
- PNPM workspace dikonfigurasi
- Turborepo dikonfigurasi
- Struktur monorepo dibuat
- `apps/web` dibuat sebagai aplikasi utama
- Next.js dikonfigurasi
- React dikonfigurasi
- TypeScript dikonfigurasi
- Tailwind CSS dikonfigurasi
- Payload CMS diintegrasikan
- PostgreSQL local environment disiapkan
- Docker environment disiapkan
- Docker Compose dikonfigurasi
- Environment variables disiapkan
- `.env.example` disiapkan
- Git repository dikonfigurasi
- Branch `main` ditetapkan sebagai branch utama
- Feature branch workflow ditetapkan
- Initial application structure berhasil dijalankan

### Application Structure

Fondasi repository Aurora:

```text
aurora/
│
├── apps/
│   ├── web/
│   ├── admin/
│   └── docs/
│
├── packages/
│
├── docs/
│
├── .github/
│
├── .gitignore
├── .env.example
├── docker-compose.yml
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── roadmaps.md
└── turbo.json
```

---

# Sprint 1 — Identity

**Status:** 🟢 Completed

Sprint 1 berfokus pada pembangunan fondasi identitas pengguna Aurora, meliputi authentication, authorization, user roles, admin access, serta integrasi database dan Payload CMS.

Tujuan sprint ini adalah memastikan Aurora memiliki sistem identity yang aman dan dapat digunakan sebagai dasar untuk seluruh domain aplikasi berikutnya.

### Completed

- User collection
- User authentication
- User authorization
- Admin role
- User role
- Login flow
- Logout flow
- Admin access
- PostgreSQL local environment
- Payload CMS integration
- Database migration
- Generated Payload types
- Admin access validation
- TypeScript validation
- Production build validation
- Pull Request
- Merge ke branch utama

### User Model

Identity Aurora menggunakan `users` collection sebagai entity utama pengguna.

Struktur user:

```text
User
├── id
├── name
├── email
├── role
│   ├── user
│   └── admin
└── createdAt
```

---

# Sprint 2 — Wedding Domain

**Status:** 🟡 In Progress

Sprint 2 berfokus pada pembangunan domain utama pernikahan Aurora.

Tujuan sprint ini adalah membangun struktur data wedding yang menjadi fondasi untuk fitur invitation, guest management, RSVP, dan wedding gift.

### Progress

- Task 2A — Wedding Collection 🟢 Completed
- Task 2B — Couple & Wedding Profile 🟢 Completed
- Task 2C — Wedding Events 🟢 Completed
- Task 2D — Task 2D — Location & Date/Time 🟢 Completed
- Task 2E — Access Control 🟢 Completed
- Task 2F — Database & Generated Types 🟢 Completed
- Task 2G — API Validation ⚪ Not Started
- Task 2H — Sprint Review ⚪ Not Started

---

## Task 2A — Wedding Collection

**Status:** 🟢 Completed

Task 2A membangun collection utama `weddings` sebagai root entity domain pernikahan.

### Completed

- `weddings` collection
- Nama pernikahan
- Slug unik
- Owner relationship ke `users`
- Status `draft` / `published`
- Ownership-based access control
- Admin access

---

# Task 2B — Couple & Wedding Profile

**Status:** 🟢 Completed

Task 2B membangun informasi pasangan dan profil dasar pernikahan.

### Completed

- Informasi mempelai pria
- Nama lengkap mempelai pria
- Nama panggilan mempelai pria
- Informasi mempelai wanita
- Nama lengkap mempelai wanita
- Nama panggilan mempelai wanita
- Profil pernikahan
- Cerita pernikahan

### Outcome

Wedding sekarang memiliki informasi dasar pasangan dan profil pernikahan yang dapat digunakan sebagai fondasi untuk fitur invitation dan pengalaman wedding berikutnya.

### Completed

- Informasi mempelai pria
- Nama lengkap mempelai pria
- Nama panggilan mempelai pria
- Informasi mempelai wanita
- Nama lengkap mempelai wanita
- Nama panggilan mempelai wanita
- Profil pernikahan
- Cerita pernikahan

---

## Task 2C — Wedding Events

**Status:** 🟢 Completed

Task 2C membangun struktur acara pernikahan sebagai array di dalam wedding.

Satu wedding dapat memiliki beberapa acara, seperti akad dan resepsi.

### Completed

- Nama acara
- Jenis acara
- Tanggal acara
- Waktu mulai
- Waktu selesai
- Dukungan beberapa acara dalam satu wedding

### Event Types

```text
Akad
Resepsi
Lainnya
```

---

## Task 2D — Location & Date/Time

**Status:** 🟢 Completed

Task 2D melengkapi informasi lokasi setiap acara pernikahan.

### Completed

- Nama tempat
- Alamat lengkap
- Tautan Google Maps
- Integrasi lokasi ke dalam `events[]`
- Validasi TypeScript
- Generated Payload types
- Production build

---

# Task 2G — API Validation

**Status:** 🟢 Completed

Task 2G memvalidasi API wedding dan memastikan ownership isolation berjalan dengan benar.

### Completed

- Create wedding melalui API
- Read wedding milik sendiri
- Update wedding milik sendiri
- Delete access validation
- Ownership isolation
- User tidak dapat membaca wedding milik user lain
- User tidak dapat mengubah wedding milik user lain
- User tidak dapat menghapus wedding milik user lain
- Owner otomatis ditentukan berdasarkan authenticated user
- Validasi melalui Postman

### API Validation

```text
POST /api/weddings
🟢 Create Wedding

GET /api/weddings/:id
🟢 Read Own Wedding

PATCH /api/weddings/:id
🟢 Update Own Wedding

GET /api/weddings/:id
🔴 Other User Blocked

PATCH /api/weddings/:id
🔴 Other User Blocked

DELETE /api/weddings/:id
🔴 Other User Blocked
```