(function () {
    const canvas = document.getElementById('ascii-canvas');
    const ctx = canvas.getContext('2d');
    const gridStats = document.getElementById('grid-stats');

    // Configuration & State
    const CELL_SIZE = 15; // Matches the chunky pixel-block + character look in the screenshot
    let cols = 0;
    let rows = 0;
    let time = 0;
    let isDark = false;
    let currentSeason = 'lotus';
    let currentCharset = 'classic';
    let targetKoiCount = 3;

    // Character dictionaries ordered from sparse to dense
    const CHARSETS = {
        classic:  ['.', ':', ';', '-', '=', '+', 't', 'i', 'l', '|', '/', '\\', 'X', 'S', '%', '8', '#', '@'],
        katakana: ['.', '·', 'ו', 'ノ', 'イ', 'ロ', 'ハ', 'ニ', 'ホ', 'ヘ', 'ト', 'チ', 'リ', 'ヌ', 'ル', 'ヲ', 'カ', 'キ'],
        binary:   ['.', ':', ';', '-', '+', '0', '1', '0', '1', '0', '1', '#', '@']
    };

    // Color Palettes matching the Harika Bommu / @stackedlol aesthetic
    const PALETTES = {
        lotus: {
            bgLight: '#FAF9F5',
            bgDark: '#0D1017',
            gridLight: 'rgba(215, 212, 204, 0.35)',
            gridDark: 'rgba(38, 45, 61, 0.38)',
            // Multi-tone botanical blocks (cell background + character foreground)
            petalOuter:  { bg: '#F4A9C7', fg: '#9E3B66', bgDark: '#521E36', fgDark: '#F4A9C7' },
            petalMid:    { bg: '#EE85B5', fg: '#7A2048', bgDark: '#7A234B', fgDark: '#FFD1E6' },
            petalCore:   { bg: '#F5B841', fg: '#8C4A00', bgDark: '#8F5B0D', fgDark: '#FFE599' },
            padLight:    { bg: '#8AB861', fg: '#2D4D14', bgDark: '#26451B', fgDark: '#A3D977' },
            padMid:      { bg: '#689F38', fg: '#1E380B', bgDark: '#1C3613', fgDark: '#86C257' },
            padDeep:     { bg: '#4B7F28', fg: '#132606', bgDark: '#14280D', fgDark: '#68A33E' },
            stem:        { bg: '#A6754B', fg: '#4A2B13', bgDark: '#4D331E', fgDark: '#D4A373' },
            stemDark:    { bg: '#8C5830', fg: '#381D0A', bgDark: '#382314', fgDark: '#B5835A' },
            koiBody:     { bg: '#F26B4E', fg: '#7C1D0B', bgDark: '#8A2B19', fgDark: '#FFB4A2' },
            koiFin:      { bg: '#F9C784', fg: '#874D00', bgDark: '#694518', fgDark: '#FFE1B5' },
            ripple:      { bg: '#E6ECEF', fg: '#607D8B', bgDark: '#1B2838', fgDark: '#6488EA' }
        },
        sakura: {
            bgLight: '#FDF8F8',
            bgDark: '#130D14',
            gridLight: 'rgba(228, 210, 215, 0.35)',
            gridDark: 'rgba(55, 35, 55, 0.35)',
            petalOuter:  { bg: '#FCD5CE', fg: '#9D4452', bgDark: '#592332', fgDark: '#FCD5CE' },
            petalMid:    { bg: '#F8AD9D', fg: '#802F3E', bgDark: '#752F41', fgDark: '#FFE5EC' },
            petalCore:   { bg: '#FFE5D9', fg: '#9C4100', bgDark: '#945227', fgDark: '#FFE8D6' },
            padLight:    { bg: '#A3B18A', fg: '#344E41', bgDark: '#2A3B2C', fgDark: '#B7C99B' },
            padMid:      { bg: '#588157', fg: '#1B2E1E', bgDark: '#1F2E21', fgDark: '#84A98C' },
            padDeep:     { bg: '#3A5A40', fg: '#101F14', bgDark: '#152117', fgDark: '#6B9080' },
            stem:        { bg: '#9C6644', fg: '#422512', bgDark: '#4A2C1D', fgDark: '#DDA15E' },
            stemDark:    { bg: '#7F5539', fg: '#2E180B', bgDark: '#361F14', fgDark: '#BC6C25' },
            koiBody:     { bg: '#E56B6F', fg: '#6B141A', bgDark: '#7D2930', fgDark: '#FFCAD4' },
            koiFin:      { bg: '#EAAC8B', fg: '#6E3619', bgDark: '#593A2B', fgDark: '#F4ACB7' },
            ripple:      { bg: '#F4E4E9', fg: '#9D6B7D', bgDark: '#291B2C', fgDark: '#B5838D' }
        },
        cyber: {
            bgLight: '#F2F7F6',
            bgDark: '#070F12',
            gridLight: 'rgba(180, 210, 205, 0.35)',
            gridDark: 'rgba(20, 60, 68, 0.35)',
            petalOuter:  { bg: '#72EFDD', fg: '#005F56', bgDark: '#0B4F4A', fgDark: '#72EFDD' },
            petalMid:    { bg: '#48BFE3', fg: '#003D5B', bgDark: '#124059', fgDark: '#90E0EF' },
            petalCore:   { bg: '#F72585', fg: '#590027', bgDark: '#7209B7', fgDark: '#FF99C8' },
            padLight:    { bg: '#80FFDB', fg: '#084C3E', bgDark: '#0F382F', fgDark: '#64DFDF' },
            padMid:      { bg: '#52B788', fg: '#083321', bgDark: '#0A2E23', fgDark: '#52B788' },
            padDeep:     { bg: '#2D6A4F', fg: '#041E13', bgDark: '#061F17', fgDark: '#40916C' },
            stem:        { bg: '#7400B8', fg: '#240046', bgDark: '#240046', fgDark: '#C77DFF' },
            stemDark:    { bg: '#5390D9', fg: '#03045E', bgDark: '#1A1B4B', fgDark: '#4EA8DE' },
            koiBody:     { bg: '#FF9E00', fg: '#5C3300', bgDark: '#7A3E00', fgDark: '#FFDD00' },
            koiFin:      { bg: '#FF007F', fg: '#59002C', bgDark: '#590D22', fgDark: '#FF758F' },
            ripple:      { bg: '#D8F3DC', fg: '#2D6A4F', bgDark: '#0B2B36', fgDark: '#00F5D4' }
        }
    };

    // Scene Entities
    let floraElements = [];
    let koiFish = [];
    let ripples = [];
    let floatingPetals = [];
    let pointer = { x: -9999, y: -9999, vx: 0, vy: 0, active: false };

    // Deterministic pseudo-random helper for cell character selection
    function cellHash(x, y, seed = 0) {
        let h = (x * 374761393 + y * 668265263 + seed * 1442695041) | 0;
        h = (h ^ (h >> 13)) * 1274126177;
        return ((h ^ (h >> 16)) >>> 0) / 4294967295;
    }

    // Build Botanical Layout (Framing the left and right sides like Harika Bommu's screenshot)
    function buildBotanicalGarden() {
        floraElements = [];

        // LEFT CLUSTER: Tall blooming lotus + stems + round lily pads
        // Large Left Lotus Flower (Top-Left)
        floraElements.push({
            type: 'lotus',
            nx: 0.14, ny: 0.28,
            rx: 7.5, ry: 8.5,
            phase: 0.2,
            scale: 1.0
        });

        // Left Stem & Woody Root Cluster (Middle-Left)
        floraElements.push({
            type: 'stemCluster',
            nx: 0.10, ny: 0.56,
            rx: 6.2, ry: 12.5,
            phase: 1.1
        });

        // Lower Left Blooming Lotus Bud
        floraElements.push({
            type: 'lotus',
            nx: 0.15, ny: 0.80,
            rx: 6.5, ry: 7.0,
            phase: 2.0,
            scale: 1.0
        });

        // Left-Inner Top Lily Pad
        floraElements.push({
            type: 'lilypad',
            nx: 0.30, ny: 0.23,
            r: 5.2,
            notchAngle: 0.6,
            phase: 0.7
        });

        // Left-Inner Lower Large Lily Pad
        floraElements.push({
            type: 'lilypad',
            nx: 0.31, ny: 0.75,
            r: 6.8,
            notchAngle: 2.8,
            phase: 1.9
        });

        // RIGHT CLUSTER: Upper Lotus & Pad + Lower Right Lotus & Pads
        // Top-Right Lotus with Leaf Halo
        floraElements.push({
            type: 'lilypad',
            nx: 0.85, ny: 0.25,
            r: 7.2,
            notchAngle: -1.2,
            phase: 0.4
        });
        floraElements.push({
            type: 'lotus',
            nx: 0.87, ny: 0.22,
            rx: 6.8, ry: 6.5,
            phase: 1.5,
            scale: 1.0
        });

        // Right-Inner Mid Lily Pad
        floraElements.push({
            type: 'lilypad',
            nx: 0.69, ny: 0.63,
            r: 4.8,
            notchAngle: 3.5,
            phase: 2.4
        });

        // Right-Inner Bottom Lily Pad
        floraElements.push({
            type: 'lilypad',
            nx: 0.70, ny: 0.88,
            r: 6.2,
            notchAngle: -0.5,
            phase: 3.1
        });

        // Bottom-Right Full Lotus Bloom
        floraElements.push({
            type: 'lotus',
            nx: 0.84, ny: 0.76,
            rx: 8.2, ry: 8.2,
            phase: 0.9,
            scale: 1.0
        });
    }

    // Spawn autonomous ASCII Koi Fish that swim around the center text
    function initKoiFish(count) {
        koiFish = [];
        for (let i = 0; i < count; i++) {
            koiFish.push({
                x: Math.random() * cols,
                y: Math.random() * rows,
                angle: Math.random() * Math.PI * 2,
                speed: (0.14 + Math.random() * 0.08) * 0.64,
                turnSpeed: (0.02 + Math.random() * 0.02) * 0.64,
                tailPhase: Math.random() * 10,
                length: 7 + (i % 2) * 2
            });
        }
    }

    // Scatter drifting petals across the canvas
    function spawnPetals(count = 14) {
        for (let i = 0; i < count; i++) {
            floatingPetals.push({
                x: Math.random() * cols,
                y: Math.random() * rows,
                vx: (Math.random() - 0.3) * 0.048,
                vy: (Math.random() - 0.2) * 0.04,
                life: 1.0
            });
        }
    }

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        cols = Math.ceil(width / CELL_SIZE);
        rows = Math.ceil(height / CELL_SIZE);
        if (gridStats) {
            gridStats.textContent = `GRID ${cols}×${rows}`;
        }
    }

    // Evaluate what botanical / pond element occupies cell (cx, cy)
    function sampleCell(cx, cy, t, palette) {
        // Gentle wind sway
        const swayX = Math.sin(t * 1.1 + cy * 0.09) * 0.45;
        const swayY = Math.cos(t * 0.9 + cx * 0.08) * 0.35;

        // 1. Check user water ripples first for displacement
        let rippleBoost = 0;
        for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r];
            const dist = Math.hypot(cx - rip.x, cy - rip.y);
            const ring = Math.abs(dist - rip.radius);
            if (ring < 1.35) {
                rippleBoost = Math.max(rippleBoost, (1 - ring / 1.35) * rip.alpha);
            }
        }

        // 2. Check Botanical Flora (Lotus, Lily Pads, Stems)
        // Iterate in reverse so top flowers sit above lily pads
        for (let i = floraElements.length - 1; i >= 0; i--) {
            const el = floraElements[i];
            const ex = el.nx * cols + swayX;
            const ey = el.ny * rows + swayY;
            const growScale = el.scale !== undefined ? el.scale : 1.0;

            if (el.type === 'lotus') {
                const dx = (cx - ex) / (el.rx * growScale);
                const dy = (cy - ey) / (el.ry * growScale);
                const dist = Math.hypot(dx, dy);
                if (dist < 1.18) {
                    const angle = Math.atan2(dy, dx);
                    // Multi-layered lotus petals using polar rose harmonic
                    const petalWave = 0.82 + 0.22 * Math.cos(angle * 7 + el.phase) + 0.12 * Math.sin(angle * 3 - t * 0.8);
                    const hash = cellHash(cx, cy, i);

                    // Sparse radiating ASCII spikes at outer tip of petals (like the `\`, `/`, `:` in screenshot)
                    if (dist >= petalWave && dist < petalWave + 0.22 && hash > 0.58) {
                        return {
                            style: palette.petalOuter,
                            density: 0.25,
                            fillBg: false, // Floating colored character on bare background
                            angleHint: angle
                        };
                    }

                    if (dist < petalWave) {
                        // Golden stamen center
                        if (dist < 0.28) {
                            return { style: palette.petalCore, density: 0.85, fillBg: true };
                        }
                        // Mid rich pink petals
                        if (dist < 0.62) {
                            return {
                                style: hash > 0.35 ? palette.petalMid : palette.petalOuter,
                                density: 0.65,
                                fillBg: true
                            };
                        }
                        // Outer soft pink petals with occasional green sepal accents
                        const isSepal = (Math.sin(angle * 5) > 0.78 && dist > 0.72);
                        return {
                            style: isSepal ? palette.padLight : palette.petalOuter,
                            density: 0.45,
                            fillBg: true
                        };
                    }
                }
            } else if (el.type === 'lilypad') {
                const dx = cx - ex;
                const dy = cy - ey;
                const dist = Math.hypot(dx, dy);
                const radius = el.r * (0.92 + 0.08 * Math.sin(cx * 0.4 + cy * 0.4));

                if (dist <= radius) {
                    const angle = Math.atan2(dy, dx);
                    // Classic V-shaped notch in lily pad
                    let angleDiff = Math.abs(Math.atan2(Math.sin(angle - el.notchAngle), Math.cos(angle - el.notchAngle)));
                    if (angleDiff < 0.32 && dist > radius * 0.25) {
                        continue;
                    }
                    const normDist = dist / radius;
                    const hash = cellHash(cx, cy, i + 10);
                    if (normDist < 0.35) {
                        return { style: palette.padDeep, density: 0.9, fillBg: true };
                    } else if (normDist < 0.72) {
                        return { style: hash > 0.4 ? palette.padMid : palette.padLight, density: 0.7, fillBg: true };
                    } else {
                        return { style: palette.padLight, density: 0.5, fillBg: true };
                    }
                }
            } else if (el.type === 'stemCluster') {
                // Organic curved woody stems & foliage on the left border
                const curveOffset = Math.sin((cy - ey) * 0.18 + t * 0.6) * 2.2;
                const dx = (cx - (ex + curveOffset)) / el.rx;
                const dy = (cy - ey) / el.ry;
                const dist = Math.hypot(dx, dy);
                if (dist < 1.0) {
                    const hash = cellHash(cx, cy, 77);
                    if (dx < -0.15) {
                        return { style: hash > 0.4 ? palette.padDeep : palette.padMid, density: 0.82, fillBg: true };
                    } else if (dx < 0.35) {
                        return { style: hash > 0.5 ? palette.stem : palette.stemDark, density: 0.78, fillBg: true };
                    } else if (hash > 0.35) {
                        return { style: palette.petalOuter, density: 0.5, fillBg: true };
                    }
                }
            }
        }

        // 3. Check Swimming ASCII Koi Fish
        for (let k = 0; k < koiFish.length; k++) {
            const fish = koiFish[k];
            const cosA = Math.cos(fish.angle);
            const sinA = Math.sin(fish.angle);
            const relX = cx - fish.x;
            const relY = cy - fish.y;

            // Rotate into fish local coordinates (alongX = head-to-tail, perpY = width)
            const along = relX * cosA + relY * sinA;
            const perp = -relX * sinA + relY * cosA;

            if (along > -fish.length && along < 2.2) {
                const tailSway = Math.sin(t * 4.8 + fish.tailPhase + along * 0.7) * (along < -1 ? 0.85 : 0.2);
                const bodyWidth = along >= 0
                    ? 1.55 * (1 - along / 2.4)
                    : 1.55 * (1 - Math.abs(along) / (fish.length + 1));

                if (Math.abs(perp - tailSway) <= bodyWidth) {
                    const isHeadOrBack = Math.abs(perp - tailSway) < bodyWidth * 0.58;
                    return {
                        style: isHeadOrBack ? palette.koiBody : palette.koiFin,
                        density: isHeadOrBack ? 0.85 : 0.45,
                        fillBg: true
                    };
                }
            }
        }

        // 4. Check Drifting Petals
        for (let p = 0; p < floatingPetals.length; p++) {
            const pt = floatingPetals[p];
            if (Math.abs(cx - Math.round(pt.x)) <= 0 && Math.abs(cy - Math.round(pt.y)) <= 0) {
                return {
                    style: palette.petalOuter,
                    density: 0.6,
                    fillBg: true
                };
            }
        }

        // 5. Check Active Water Ripple Ring
        if (rippleBoost > 0.15) {
            return {
                style: palette.ripple,
                density: Math.min(0.9, rippleBoost),
                fillBg: rippleBoost > 0.45
            };
        }

        return null;
    }

    // Main Render & Physics Loop
    function render() {
        time += 0.02;
        const palette = PALETTES[currentSeason];
        const chars = CHARSETS[currentCharset];

        // Clear canvas with theme background
        ctx.fillStyle = isDark ? palette.bgDark : palette.bgLight;
        ctx.fillRect(0, 0, cols * CELL_SIZE, rows * CELL_SIZE);

        // Draw subtle architectural grid lines (like the screenshot background)
        ctx.strokeStyle = isDark ? palette.gridDark : palette.gridLight;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        for (let x = 0; x <= cols; x++) {
            ctx.moveTo(x * CELL_SIZE, 0);
            ctx.lineTo(x * CELL_SIZE, rows * CELL_SIZE);
        }
        for (let y = 0; y <= rows; y++) {
            ctx.moveTo(0, y * CELL_SIZE);
            ctx.lineTo(cols * CELL_SIZE, y * CELL_SIZE);
        }
        ctx.stroke();

        // Update growing user-planted lotuses
        for (let i = 0; i < floraElements.length; i++) {
            if (floraElements[i].scale !== undefined && floraElements[i].scale < 1) {
                floraElements[i].scale = Math.min(1, floraElements[i].scale + 0.032);
            }
        }

        // Update Koi Fish movement (gently orbit around the typography in the center)
        for (let k = 0; k < koiFish.length; k++) {
            const fish = koiFish[k];
            fish.x += Math.cos(fish.angle) * fish.speed;
            fish.y += Math.sin(fish.angle) * fish.speed;

            // Softly steer away from the central text box so typography stays crisp
            const centerDistX = fish.x - cols * 0.5;
            const centerDistY = fish.y - rows * 0.5;
            if (Math.abs(centerDistX) < cols * 0.22 && Math.abs(centerDistY) < rows * 0.20) {
                const desired = Math.atan2(centerDistY, centerDistX);
                fish.angle += Math.sin(desired - fish.angle) * 0.032;
            }

            // Gentle wandering
            fish.angle += Math.sin(time * 0.72 + k * 2.1) * 0.0096;

            // Wrap around screen edges with padding
            const pad = 8;
            if (fish.x < -pad) fish.x = cols + pad;
            if (fish.x > cols + pad) fish.x = -pad;
            if (fish.y < -pad) fish.y = rows + pad;
            if (fish.y > rows + pad) fish.y = -pad;
        }

        // Update Ripples
        for (let r = ripples.length - 1; r >= 0; r--) {
            ripples[r].radius += 0.176;
            ripples[r].alpha -= 0.0112;
            if (ripples[r].alpha <= 0) {
                ripples.splice(r, 1);
            }
        }

        // Update Floating Petals
        for (let p = floatingPetals.length - 1; p >= 0; p--) {
            const pt = floatingPetals[p];
            pt.x += pt.vx + Math.sin(time + p) * 0.016;
            pt.y += pt.vy;
            if (pt.x < 0) pt.x = cols;
            if (pt.x > cols) pt.x = 0;
            if (pt.y > rows) pt.y = 0;
        }

        // Configure font for ASCII characters
        ctx.font = `600 ${Math.floor(CELL_SIZE * 0.72)}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Render Grid Cells
        for (let cy = 0; cy < rows; cy++) {
            for (let cx = 0; cx < cols; cx++) {
                const cell = sampleCell(cx, cy, time, palette);
                const px = cx * CELL_SIZE;
                const py = cy * CELL_SIZE;

                if (cell) {
                    // Draw colored tile block
                    if (cell.fillBg) {
                        ctx.fillStyle = isDark ? cell.style.bgDark : cell.style.bg;
                        ctx.fillRect(px + 0.5, py + 0.5, CELL_SIZE - 1, CELL_SIZE - 1);
                    }

                    // Choose ASCII character from density + slow shimmer
                    const shimmer = Math.floor(cellHash(cx, cy, Math.floor(time * 2.5)) * 3);
                    const baseIdx = Math.floor(cell.density * (chars.length - 1));
                    const charIdx = Math.max(0, Math.min(chars.length - 1, baseIdx + (shimmer - 1)));
                    const ch = chars[charIdx];

                    ctx.fillStyle = isDark ? cell.style.fgDark : cell.style.fg;
                    ctx.fillText(ch, px + CELL_SIZE / 2, py + CELL_SIZE / 2 + 0.5);
                } else {
                    // Ambient sparse water shimmer dots & dashes in background (like the screenshot)
                    const waterNoise = Math.sin(cx * 0.25 + time * 0.7) * Math.cos(cy * 0.3 - time * 0.5);
                    const h = cellHash(cx, cy, 101);
                    if (waterNoise > 0.78 && h > 0.84) {
                        ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.25)' : 'rgba(120, 113, 108, 0.32)';
                        const ambientChar = h > 0.93 ? '-' : '.';
                        ctx.fillText(ambientChar, px + CELL_SIZE / 2, py + CELL_SIZE / 2);
                    }
                }
            }
        }

        requestAnimationFrame(render);
    }

    // Mouse / Touch Interaction for Water Ripples & Planting Lotuses
    let lastRippleTime = 0;
    window.addEventListener('pointermove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const gx = (e.clientX - rect.left) / CELL_SIZE;
        const gy = (e.clientY - rect.top) / CELL_SIZE;
        pointer.x = gx;
        pointer.y = gy;

        const now = performance.now();
        if (now - lastRippleTime > 75 && gy >= 0 && gy <= rows) {
            ripples.push({ x: gx, y: gy, radius: 0.6, alpha: 0.75 });
            lastRippleTime = now;
        }
    });

    // Click on canvas to plant a new blooming ASCII lotus
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const gx = (e.clientX - rect.left) / CELL_SIZE;
        const gy = (e.clientY - rect.top) / CELL_SIZE;

        // Create a ripple burst
        ripples.push({ x: gx, y: gy, radius: 0.5, alpha: 1.0 });

        // Plant a lotus or lilypad where clicked
        const nx = gx / cols;
        const ny = gy / rows;
        floraElements.push({
            type: Math.random() > 0.28 ? 'lotus' : 'lilypad',
            nx: nx,
            ny: ny,
            rx: 5.5 + Math.random() * 2.5,
            ry: 5.5 + Math.random() * 2.5,
            r: 5.2 + Math.random() * 1.8,
            notchAngle: Math.random() * Math.PI * 2,
            phase: Math.random() * Math.PI * 2,
            scale: 0.05 // Animates open smoothly
        });

        // Keep flora count reasonable
        if (floraElements.length > 22) {
            floraElements.shift();
        }
    });

    // UI Controls Wiring
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark', isDark);
    });

    // Email Copy Toast
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyToast = document.getElementById('copy-toast');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const tempInput = document.createElement('textarea');
            tempInput.value = 'workwithcristobal@gmail.com';
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            copyToast.classList.remove('opacity-0');
            setTimeout(() => copyToast.classList.add('opacity-0'), 1800);
        });
    }

    // Studio Drawer Toggle
    const vibeDrawer = document.getElementById('vibe-drawer');
    const toggleBtns = [
        document.getElementById('toggle-playground-btn'),
        document.getElementById('monogram-btn'),
        document.getElementById('quick-studio-btn')
    ];
    const closeDrawerBtn = document.getElementById('close-drawer');

    function toggleDrawer() {
        const isHidden = vibeDrawer.classList.contains('opacity-0');
        if (isHidden) {
            vibeDrawer.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
        } else {
            vibeDrawer.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
        }
    }
    toggleBtns.forEach(btn => btn && btn.addEventListener('click', toggleDrawer));
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', toggleDrawer);

    // Prototype: propagate the pond palette to the whole site theme.
    // CSS in css/style.css keys off body[data-pond-theme="lotus|sakura|cyber"].
    function applySiteTheme() {
        document.body.dataset.pondTheme = currentSeason;
    }
    applySiteTheme();

    // Season Buttons
    document.querySelectorAll('.season-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSeason = btn.dataset.season;
            applySiteTheme();
            document.querySelectorAll('.season-btn').forEach(b => {
                b.className = 'season-btn px-2 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-transparent hover:border-stone-300 transition-all';
            });
            btn.className = 'season-btn px-2 py-1.5 rounded-lg bg-pink-100 dark:bg-pink-950/70 text-pink-900 dark:text-pink-200 border border-pink-300 dark:border-pink-700 transition-all';
        });
    });

    // Charset Buttons
    document.querySelectorAll('.charset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCharset = btn.dataset.charset;
            document.querySelectorAll('.charset-btn').forEach(b => {
                b.className = 'charset-btn px-2 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 transition-all';
            });
            btn.className = 'charset-btn px-2 py-1 rounded-lg bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900 transition-all';
        });
    });

    // Koi Count Slider
    const koiSlider = document.getElementById('koi-slider');
    const koiCountLabel = document.getElementById('koi-count-label');
    koiSlider.addEventListener('input', (e) => {
        targetKoiCount = parseInt(e.target.value, 10);
        koiCountLabel.textContent = `${targetKoiCount} Fish`;
        initKoiFish(targetKoiCount);
    });

    // Scatter Petals & Regrow Buttons
    document.getElementById('feed-koi-btn').addEventListener('click', () => {
        spawnPetals(18);
        ripples.push({ x: cols * 0.5, y: rows * 0.5, radius: 1, alpha: 0.9 });
    });

    document.getElementById('regrow-btn').addEventListener('click', () => {
        buildBotanicalGarden();
        floraElements.forEach(el => {
            el.nx += (Math.random() - 0.5) * 0.04;
            el.ny += (Math.random() - 0.5) * 0.04;
            el.scale = 0.1;
        });
    });

    // Initialize on Load
    window.addEventListener('resize', resizeCanvas);
    window.onload = function () {
        resizeCanvas();
        buildBotanicalGarden();
        initKoiFish(targetKoiCount);
        spawnPetals(10);
        render();
    };
})();


/* ---- Prototype only: contact-section copy-email button ---- */
function protoCopyEmail() {
    navigator.clipboard.writeText('workwithcristobal@gmail.com').then(() => {
        const t = document.getElementById('protoEmailText');
        if (!t) return;
        t.textContent = 'Copied to clipboard ✓';
        setTimeout(() => { t.textContent = 'Copy my email'; }, 2400);
    });
}
