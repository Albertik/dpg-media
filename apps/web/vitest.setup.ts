import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'node:util';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';

// Increase timeout for async operations
vi.setConfig({ testTimeout: 10000 });

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
} as any;

vi.mock('next/navigation', () => ({
	useRouter: () => ({
		push: vi.fn(),
		replace: vi.fn(),
		prefetch: vi.fn(),
	}),
	usePathname: () => '/',
}));

// Mock cache API required by commerce-kit
vi.mock('next/cache', () => ({
	unstable_cache: vi.fn((fn) => fn),
	revalidateTag: vi.fn(),
}));

expect.extend(matchers);

afterEach(() => {
	cleanup();
});
