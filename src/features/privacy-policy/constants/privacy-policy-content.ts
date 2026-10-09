import type { Language } from "../types/language";
import type { PrivacyPolicyTranslation } from "../types/privacy-policy";

const englishContent: PrivacyPolicyTranslation = {
  title: "Privacy Policy",
  lastUpdated: "Last Updated: July 7, 2026",
  sidebarHeading: "Sections",
  sections: [
    {
      id: "introduction",
      sidebarLabel: "1. Introduction",
      heading: "1. Introduction",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            { type: "text", text: "Welcome to " },
            { type: "bold", text: "PT Simple Journey" },
            {
              type: "text",
              text: " We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications and our web portal at ",
            },
            {
              type: "link",
              text: "https://simplejourney.co.id",
              href: "https://simplejourney.co.id",
              external: true,
            },
            { type: "text", text: "." },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "By accessing or using our services, you consent to the collection, transfer, storage, disclosure, and other uses of your information as described in this Privacy Policy.",
            },
          ],
        },
      ],
    },
    {
      id: "information-collection",
      sidebarLabel: "2. Information We Collect",
      heading: "2. Information We Collect",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "We may collect several types of information to provide and improve our services to you:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            [
              { type: "bold", text: "Personal Information:" },
              {
                type: "text",
                text: " When you register an account, log in, or contact support, we may collect your name, email address, phone number, company affiliation, and account credentials.",
              },
            ],
            [
              { type: "bold", text: "Location Data:" },
              {
                type: "text",
                text: " To facilitate transport tracking, driver navigation, and passenger dashboard features, our mobile applications may request permission to collect precise or approximate real-time location data from your device.",
              },
            ],
            [
              { type: "bold", text: "Device Information:" },
              {
                type: "text",
                text: " We collect device-specific details such as your device model, operating system version, unique device identifiers, IP address, and browser characteristics.",
              },
            ],
            [
              { type: "bold", text: "Usage and Log Data:" },
              {
                type: "text",
                text: " We log information about your interactions with our services, including active sessions, access times, pages viewed, and application performance crash reports.",
              },
            ],
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      sidebarLabel: "3. How We Use",
      heading: "3. How We Use Your Information",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "We process your data for purposes based on legitimate business interests and to fulfill our services:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            [
              {
                type: "text",
                text: "To set up, manage, and secure your user account.",
              },
            ],
            [
              {
                type: "text",
                text: "To provide real-time updates, dashboard visualisations, and notifications relevant to your transport status.",
              },
            ],
            [
              {
                type: "text",
                text: "To facilitate support requests, resolve technical issues, and respond to user inquiries.",
              },
            ],
            [
              {
                type: "text",
                text: "To improve our applications' responsiveness, performance, and overall security.",
              },
            ],
            [
              {
                type: "text",
                text: "To comply with legal obligations or enforce our terms of service.",
              },
            ],
          ],
        },
      ],
    },
    {
      id: "data-security",
      sidebarLabel: "4. Data Security",
      heading: "4. Data Security and Storage",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "The security of your personal information is extremely important to us. We implement industry-standard technical, administrative, and physical safeguards (including database encryption and secure TLS communication channels) designed to protect your data from unauthorized access, disclosure, alteration, or loss.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "We store your data on secure database systems and retain it only for as long as necessary to fulfill the services outlined in this policy, or to meet legal and regulatory requirements.",
            },
          ],
        },
      ],
    },
    {
      id: "device-permissions",
      sidebarLabel: "5. Device Permissions",
      heading: "5. Device Permissions",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Depending on the specific features used in our mobile applications, the app may request access to:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            [
              { type: "bold", text: "Location Services:" },
              {
                type: "text",
                text: " Essential for mapping, tracking, and locating transport routes.",
              },
            ],
            [
              { type: "bold", text: "Push Notifications:" },
              {
                type: "text",
                text: " Used to send alerts about trip status, schedule updates, or account safety notifications.",
              },
            ],
            [
              { type: "bold", text: "Network Connection:" },
              {
                type: "text",
                text: " Required to establish data synchronization with our central servers.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "You can disable these permissions at any time through your mobile device's settings menu, although doing so may limit your access to key application features.",
            },
          ],
        },
      ],
    },
    {
      id: "third-party",
      sidebarLabel: "6. Third-Party Services",
      heading: "6. Third-Party Services",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "We may integrate third-party APIs or software development kits (SDKs) such as Google Play Services or Firebase SDKs for system performance monitoring and crash analytics. These third-party services operate independently and have their own respective privacy policies.",
            },
          ],
        },
      ],
    },
    {
      id: "contact-us",
      sidebarLabel: "7. Contact Us",
      heading: "7. Contact Us",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please feel free to reach out to us:",
            },
          ],
        },
        {
          kind: "contact",
          paragraphs: [
            [{ type: "bold", text: "PT Simple Journey" }],
            [
              { type: "text", text: "Email: " },
              {
                type: "link",
                text: "info@simplejourney.co.id",
                href: "mailto:info@simplejourney.co.id",
              },
            ],
            [{ type: "text", text: "Phone: 0813-1898-2939" }],
            [
              {
                type: "text",
                text: "Address: Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119",
              },
            ],
          ],
        },
      ],
    },
  ],
};

const indonesianContent: PrivacyPolicyTranslation = {
  title: "Kebijakan Privasi",
  lastUpdated: "Terakhir Diperbarui: 7 Juli 2026",
  sidebarHeading: "Bagian",
  sections: [
    {
      id: "introduction",
      sidebarLabel: "1. Pendahuluan",
      heading: "1. Pendahuluan",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            { type: "text", text: "Selamat datang di " },
            { type: "bold", text: "PT Simple Journey" },
            {
              type: "text",
              text: ' ("kami", "milik kami", atau "kita"). Kami berkomitmen untuk melindungi data pribadi dan privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan aplikasi seluler kami (termasuk Aplikasi Satellite dan aplikasi penumpang/klien) serta portal web kami di ',
            },
            {
              type: "link",
              text: "https://simplejourney.co.id",
              href: "https://simplejourney.co.id",
              external: true,
            },
            { type: "text", text: "." },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Dengan mengakses atau menggunakan layanan kami, Anda menyetujui pengumpulan, transfer, penyimpanan, pengungkapan, dan penggunaan informasi Anda lainnya sebagaimana dijelaskan dalam Kebijakan Privasi ini.",
            },
          ],
        },
      ],
    },
    {
      id: "information-collection",
      sidebarLabel: "2. Informasi Kumpul",
      heading: "2. Informasi yang Kami Kumpulkan",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Kami dapat mengumpulkan beberapa jenis informasi untuk menyediakan dan meningkatkan layanan kami kepada Anda:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            [
              { type: "bold", text: "Informasi Pribadi:" },
              {
                type: "text",
                text: " Saat Anda mendaftarkan akun, masuk, atau menghubungi dukungan teknis, kami dapat mengumpulkan nama, alamat email, nomor telepon, afiliasi perusahaan, dan kredensial akun Anda.",
              },
            ],
            [
              { type: "bold", text: "Data Lokasi:" },
              {
                type: "text",
                text: " Untuk memfasilitasi pelacakan transportasi, navigasi pengemudi, dan fitur dashboard penumpang, aplikasi seluler kami dapat meminta izin untuk mengumpulkan data lokasi real-time yang tepat atau perkiraan lokasi dari perangkat Anda.",
              },
            ],
            [
              { type: "bold", text: "Informasi Perangkat:" },
              {
                type: "text",
                text: " Kami mengumpulkan detail spesifik perangkat seperti model perangkat, versi sistem operasi, pengidentifikasi perangkat unik, alamat IP, dan karakteristik browser.",
              },
            ],
            [
              { type: "bold", text: "Data Penggunaan dan Log:" },
              {
                type: "text",
                text: " Kami mencatat informasi tentang interaksi Anda dengan layanan kami, termasuk sesi aktif, waktu akses, halaman yang dilihat, dan laporan kegagalan kinerja aplikasi.",
              },
            ],
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      sidebarLabel: "3. Cara Penggunaan",
      heading: "3. Bagaimana Kami Menggunakan Informasi Anda",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Kami memproses data Anda untuk tujuan berdasarkan kepentingan bisnis yang sah dan untuk memenuhi layanan kami:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            [
              {
                type: "text",
                text: "Untuk menyiapkan, mengelola, dan mengamankan akun pengguna Anda.",
              },
            ],
            [
              {
                type: "text",
                text: "Untuk menyediakan pembaruan real-time, visualisasi dashboard, dan notifikasi yang relevan dengan status transportasi Anda.",
              },
            ],
            [
              {
                type: "text",
                text: "Untuk memfasilitasi permintaan dukungan, menyelesaikan masalah teknis, dan menanggapi pertanyaan pengguna.",
              },
            ],
            [
              {
                type: "text",
                text: "Untuk meningkatkan responsivitas, kinerja, dan keamanan keseluruhan aplikasi kami.",
              },
            ],
            [
              {
                type: "text",
                text: "Untuk mematuhi kewajiban hukum atau menegakkan ketentuan layanan kami.",
              },
            ],
          ],
        },
      ],
    },
    {
      id: "data-security",
      sidebarLabel: "4. Keamanan Data",
      heading: "4. Keamanan dan Penyimpanan Data",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Keamanan informasi pribadi Anda sangat penting bagi kami. Kami menerapkan langkah-langkah keamanan teknis, administratif, dan fisik standar industri (termasuk enkripsi database dan saluran komunikasi TLS yang aman) yang dirancang untuk melindungi data Anda dari akses, pengungkapan, pengubahan, atau kehilangan yang tidak sah.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Kami menyimpan data Anda pada sistem database yang aman dan menyimpannya hanya selama diperlukan untuk memenuhi layanan yang diuraikan dalam kebijakan ini, atau untuk memenuhi persyaratan hukum dan peraturan.",
            },
          ],
        },
      ],
    },
    {
      id: "device-permissions",
      sidebarLabel: "5. Izin Perangkat",
      heading: "5. Izin Perangkat",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Tergantung pada fitur khusus yang digunakan dalam aplikasi seluler kami, aplikasi dapat meminta akses ke:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            [
              { type: "bold", text: "Layanan Lokasi:" },
              {
                type: "text",
                text: " Sangat penting untuk pemetaan, pelacakan, dan pencarian rute transportasi.",
              },
            ],
            [
              { type: "bold", text: "Notifikasi Push:" },
              {
                type: "text",
                text: " Digunakan untuk mengirimkan peringatan tentang status perjalanan, pembaruan jadwal, atau notifikasi keselamatan akun.",
              },
            ],
            [
              { type: "bold", text: "Koneksi Jaringan:" },
              {
                type: "text",
                text: " Diperlukan untuk melakukan sinkronisasi data dengan server pusat kami.",
              },
            ],
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Anda dapat menonaktifkan izin ini kapan saja melalui menu pengaturan perangkat seluler Anda, meskipun hal tersebut dapat membatasi akses Anda ke fitur-fitur utama aplikasi.",
            },
          ],
        },
      ],
    },
    {
      id: "third-party",
      sidebarLabel: "6. Pihak Ketiga",
      heading: "6. Layanan Pihak Ketiga",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Kami dapat mengintegrasikan API pihak ketiga atau software development kit (SDK) seperti Layanan Google Play atau SDK Firebase untuk memantau kinerja sistem dan analisis kegagalan. Layanan pihak ketiga ini beroperasi secara independen dan memiliki kebijakan privasi masing-masing.",
            },
          ],
        },
      ],
    },
    {
      id: "contact-us",
      sidebarLabel: "7. Hubungi Kami",
      heading: "7. Hubungi Kami",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              text: "Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan mengenai Kebijakan Privasi ini atau praktik data kami, jangan ragu untuk menghubungi kami:",
            },
          ],
        },
        {
          kind: "contact",
          paragraphs: [
            [{ type: "bold", text: "PT Simple Journey" }],
            [
              { type: "text", text: "Email: " },
              {
                type: "link",
                text: "info@simplejourney.co.id",
                href: "mailto:info@simplejourney.co.id",
              },
            ],
            [{ type: "text", text: "Phone: 0813-1898-2939" }],
            [
              {
                type: "text",
                text: "Alamat: Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119",
              },
            ],
          ],
        },
      ],
    },
  ],
};

export const PRIVACY_POLICY_TRANSLATIONS: Record<
  Language,
  PrivacyPolicyTranslation
> = {
  en: englishContent,
  id: indonesianContent,
};
