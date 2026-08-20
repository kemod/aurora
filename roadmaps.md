# Aurora Roadmap

> **Aurora — platform pengalaman pernikahan digital dari Auctore yang membantu pasangan mempersiapkan dan mengelola pernikahan dengan lebih mudah, nyaman, dan bermakna.**

---

# Table of Contents

- [Project Overview](#project-overview)
- [Vision](#vision)
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

**Current Sprint:** Sprint 1 — Identity

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

- PostgreSQL

## Caching / Infrastructure

- Redis

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
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── roadmaps.md
└── turbo.json