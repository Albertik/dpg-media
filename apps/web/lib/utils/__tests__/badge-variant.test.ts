import { describe, it, expect } from 'vitest';
import { getStatusVariant, getSyncVariant } from '../badge-variant';

describe('getStatusVariant', () => {
  it('should return success variant for active status', () => {
    expect(getStatusVariant('ACTIVE')).toBe('success');
    expect(getStatusVariant('active')).toBe('success');
  });

  it('should return warning variant for suspended status', () => {
    expect(getStatusVariant('SUSPENDED')).toBe('warning');
    expect(getStatusVariant('suspended')).toBe('warning');
  });

  it('should return error variant for expired status', () => {
    expect(getStatusVariant('EXPIRED')).toBe('error');
    expect(getStatusVariant('expired')).toBe('error');
  });

  it('should return default variant for unknown status', () => {
    expect(getStatusVariant('UNKNOWN')).toBe('default');
    expect(getStatusVariant('')).toBe('default');
  });
});

describe('getSyncVariant', () => {
  it('should return success variant for in sync status', () => {
    expect(getSyncVariant('IN SYNC')).toBe('success');
    expect(getSyncVariant('in sync')).toBe('success');
  });

  it('should return warning variant for out of sync status', () => {
    expect(getSyncVariant('OUT OF SYNC')).toBe('warning');
    expect(getSyncVariant('out of sync')).toBe('warning');
  });

  it('should return error variant for not found statuses', () => {
    expect(getSyncVariant('NOT FOUND IN S2')).toBe('error');
    expect(getSyncVariant('not found in s2')).toBe('error');
    expect(getSyncVariant('NOT FOUND IN TEMPTATION')).toBe('error');
    expect(getSyncVariant('not found in temptation')).toBe('error');
  });

  it('should return default variant for unknown sync status', () => {
    expect(getSyncVariant('UNKNOWN')).toBe('default');
    expect(getSyncVariant('')).toBe('default');
  });
});
