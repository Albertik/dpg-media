import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import 'next';
import { afterEach, expect } from 'vitest';

/**
 * Vitest setup logic
 * https://vitest.dev/config/#setupfiles
 */

expect.extend(matchers);

afterEach(() => {
	cleanup();
});
