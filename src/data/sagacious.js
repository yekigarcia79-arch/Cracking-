// Product facts for Sagacious. Copy on the site is derived from this file so
// the interface preview, coverage table and specification sheet stay in sync.

export const artifacts = [
  { tag: 'BAM', name: 'Background Activity Moderator', where: 'Services\\bam\\State\\UserSettings', note: 'Software execution log' },
  { tag: 'SHIM', name: 'AppCompatCache', where: 'SYSTEM hive', note: 'Shim cache entries' },
  { tag: 'AMC', name: 'Amcache', where: 'Amcache.hve', note: 'Installed and executed programs' },
  { tag: 'PF', name: 'Prefetch', where: 'Windows\\Prefetch\\*.pf', note: 'Launch counts, load times' },
  { tag: 'UA', name: 'UserAssist', where: 'Registry · ROT13 value names', note: 'GUI run counts' },
  { tag: 'MUI', name: 'MUICache', where: 'Registry', note: 'Application display names' },
  { tag: 'REC / JMP', name: 'RecentDocs, jump lists', where: 'Recent\\*.lnk', note: 'Per-app file history' },
  { tag: 'PS', name: 'PowerShell history', where: 'Console host', note: 'Command history' },
  { tag: 'DEF', name: 'Defender history', where: 'Detection log', note: 'Detection records' },
  { tag: 'EVT', name: 'Event logs', where: 'Process and driver starts', note: 'Start records' },
  { tag: 'TMP', name: 'Temp files', where: 'File system', note: 'Leftover working files' },
  { tag: 'DRV', name: 'Driver services', where: 'Registry', note: 'Install traces' },
  { tag: 'USN', name: 'Change journal', where: 'NTFS $UsnJrnl', note: 'File system changes' },
  { tag: 'LIVE', name: 'Live state', where: 'Running processes', note: 'Processes and loaded drivers' },
];

export const capabilities = [
  {
    index: '01',
    title: 'Enumerate',
    lead: 'Fourteen stores, one list.',
    body: 'Sagacious reads the registry, the file system and the NTFS change journal, then normalises what it finds into rows you can read: artifact tag, file name, full path. No raw hives, no hex.',
    detail: 'BAM · SHIM · AMC · PF · UA · MUI · REC · PS · DEF · EVT · TMP · DRV · USN · LIVE',
  },
  {
    index: '02',
    title: 'Select',
    lead: 'Pre-selected, not blanket.',
    body: 'On load, one optional lookup returns a public list of tracked executables and only matching rows are ticked. Everything else loads unselected, so a stray notepad.exe is never swept by accident.',
    detail: 'Filter by path, file name or artifact tag. SYS narrows the list to software outside \\Windows\\.',
  },
  {
    index: '03',
    title: 'Remove',
    lead: 'The trace, and the files behind it.',
    body: 'Deleting a row rewrites or prunes the store in place. Arm DELETE FILES and the software itself goes too: the folder chain, its data folders, the installer, the archive, the shortcut.',
    detail: 'Name matching is token-based — com.solara.v3 goes, Xenoblade.png stays.',
  },
  {
    index: '04',
    title: 'Reconcile',
    lead: 'Rebuild the journal.',
    body: 'Every delete ends with a fresh USN journal on each fixed volume, so the file-deleted records produced by the wipe itself are gone as well. The status line reports how many volumes were reset.',
    detail: 'Wipe, journal reset and self-trace cleanup run on a worker thread — the window never freezes.',
  },
];

export const highlights = [
  {
    icon: 'shield',
    title: 'Stealth, on by default',
    body: 'Sagacious is a trace of itself. Its own BAM, Prefetch, MUICache, UserAssist, Recent, shim cache and Amcache entries are dropped at startup, swept every two seconds while it runs, and removed again on exit.',
    meta: 'Full pass on close',
  },
  {
    icon: 'sweep',
    title: 'SMART background sweep',
    body: 'Names involved in a delete stay tracked. A background pass walks every fixed drive by exact name, resuming where it stopped, and removes anything that carries them — including folders an updater rewrites later.',
    meta: 'Idle backoff 1.5 s → 24 s',
  },
];

export const specs = [
  { key: 'Platform', value: 'Windows 10 / 11 · x64' },
  { key: 'Runtime', value: 'Win32 · DirectX 11' },
  { key: 'Interface', value: 'GUI' },
  { key: 'Window', value: '560 × 400, fixed' },
  { key: 'Privileges', value: 'Administrator' },
  { key: 'Distribution', value: 'Single executable' },
  { key: 'Network', value: 'One optional lookup, cached 24 h' },
];

export const principles = [
  {
    index: '01',
    title: 'Say what it does',
    body: 'The interface names the stores it reads and the volume count it resets. No scores, no shields, no vague promises about being “clean”.',
  },
  {
    index: '02',
    title: 'Local by default',
    body: 'Everything runs on the machine. The single network request is a public list lookup that can be skipped with an environment variable and is cached for a day.',
  },
  {
    index: '03',
    title: 'Deletion is final',
    body: 'Nothing is backed up, nothing goes to a recycle bin, and the app remembers nothing between runs. The confirmation is the button you pressed.',
  },
  {
    index: '04',
    title: 'A small surface',
    body: 'One fixed 560 × 400 window, one executable, one worker thread. There is no tray icon, no service, no updater and no account.',
  },
];

// Rows rendered inside the interface reconstruction. Two are pre-selected to
// mirror the product's pre-selection behaviour.
export const appRows = [
  { tag: 'bam', path: 'C:\\Program Files (x86)\\Faronics\\Deep Freeze\\Install C-0\\_$D.FrzState2k.exe' },
  { tag: 'bam', path: 'Microsoft Windows\\CloudExperienceHost_cw5n1h2txyewy' },
  { tag: 'bam', path: 'Microsoft Windows\\StartMenuExperienceHost_cw5n1h2txyewy' },
  { tag: 'bam', path: 'Microsoft Windows\\Client CBS_cw5n1h2txyewy' },
  { tag: 'shim', path: 'Microsoft Windows\\ShellExperienceHost_cw5n1h2txyewy' },
  { tag: 'pf', path: 'windows.immersivecontrolpanel_8wekyb3d8bbwe' },
  { tag: 'ua', path: 'Microsoft ScreenSketch_8wekyb3d8bbwe' },
  { tag: 'pf', path: 'C:\\Users\\Public\\Downloads\\obs-studio-31.0.1-installer.exe', selected: true },
  { tag: 'bam', path: 'C:\\Users\\Public\\AppData\\Local\\Programs\\Signal\\Signal.exe', selected: true },
];
