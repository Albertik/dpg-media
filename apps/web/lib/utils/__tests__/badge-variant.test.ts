import { describe, it, expect } from 'vitest';
import { getStatusVariant, getSyncVariant } from '../badge-variant';

describe('getStatusVariant', () => {
  it('should return default variant for active status', () => {
    expect(getStatusVariant('ACTIVE')).toBe('default');
    expect(getStatusVariant('active')).toBe('default');
  });

  it('should return secondary variant for suspended status', () => {
    expect(getStatusVariant('SUSPENDED')).toBe('secondary');
    expect(getStatusVariant('suspended')).toBe('secondary');
  });

  it('should return destructive variant for expired status', () => {
    expect(getStatusVariant('EXPIRED')).toBe('destructive');
    expect(getStatusVariant('expired')).toBe('destructive');
  });

  it('should return default variant for unknown status', () => {
    expect(getStatusVariant('UNKNOWN')).toBe('default');
    expect(getStatusVariant('')).toBe('default');
  });
});

describe('getSyncVariant', () => {
  it('should return default variant for in sync status', () => {
    expect(getSyncVariant('IN SYNC')).toBe('default');
    expect(getSyncVariant('in sync')).toBe('default');
  });

  it('should return secondary variant for out of sync status', () => {
    expect(getSyncVariant('OUT OF SYNC')).toBe('secondary');
    expect(getSyncVariant('out of sync')).toBe('secondary');
  });

  it('should return destructive variant for not found statuses', () => {
    expect(getSyncVariant('NOT FOUND IN S2')).toBe('destructive');
    expect(getSyncVariant('not found in s2')).toBe('destructive');
    expect(getSyncVariant('NOT FOUND IN TEMPTATION')).toBe('destructive');
    expect(getSyncVariant('not found in temptation')).toBe('destructive');
  });

  it('should return default variant for unknown sync status', () => {
    expect(getSyncVariant('UNKNOWN')).toBe('default');
    expect(getSyncVariant('')).toBe('default');
  });
});
