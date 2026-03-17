// ────────────────────────────────────────────────────────────────────────────
// Sensor Types — Uhack Arohan IoT Hazard Monitoring Dashboard
// ────────────────────────────────────────────────────────────────────────────

export type SensorType =
  | 'temperature'
  | 'humidity'
  | 'gas_methane'
  | 'gas_co'
  | 'gas_co2'
  | 'dust_pm25'
  | 'dust_pm10'
  | 'vibration'
  | 'pressure'
  | 'noise';

export type SensorStatus = 'online' | 'offline' | 'warning' | 'critical' | 'maintenance';

export type ZoneId = string;

export interface Zone {
  id: ZoneId;
  name: string;
  description?: string;
  location: string;
  sensorIds: string[];
}

export interface SensorThreshold {
  warning: number;
  critical: number;
  unit: string;
}

export const SENSOR_THRESHOLDS: Record<SensorType, SensorThreshold> = {
  temperature: { warning: 45, critical: 65, unit: '°C' },
  humidity: { warning: 80, critical: 95, unit: '%' },
  gas_methane: { warning: 1.0, critical: 2.5, unit: '% LEL' },
  gas_co: { warning: 25, critical: 50, unit: 'ppm' },
  gas_co2: { warning: 1000, critical: 5000, unit: 'ppm' },
  dust_pm25: { warning: 35, critical: 75, unit: 'µg/m³' },
  dust_pm10: { warning: 60, critical: 150, unit: 'µg/m³' },
  vibration: { warning: 50, critical: 100, unit: 'mm/s' },
  pressure: { warning: 110, critical: 130, unit: 'kPa' },
  noise: { warning: 85, critical: 100, unit: 'dB' },
};

export interface SensorReading {
  value: number;
  unit: string;
  timestamp: string; // ISO 8601
}

export interface Sensor {
  id: string;
  name: string;
  type: SensorType;
  zoneId: ZoneId;
  zoneName: string;
  status: SensorStatus;
  lastReading: SensorReading;
  batteryLevel?: number; // 0–100
  firmwareVersion?: string;
  installedAt: string; // ISO 8601
  lastMaintenance?: string; // ISO 8601
}

export interface SensorHistory {
  sensorId: string;
  readings: SensorReading[];
}

export interface SensorStats {
  sensorId: string;
  min: number;
  max: number;
  avg: number;
  period: 'hour' | 'day' | 'week' | 'month';
}

export interface SystemHealth {
  totalSensors: number;
  onlineCount: number;
  offlineCount: number;
  warningCount: number;
  criticalCount: number;
  maintenanceCount: number;
  uptimePercent: number;
}

export interface IoTReading {
  sensorId: string;
  type: SensorType;
  value: number;
  unit: string;
  timestamp: string;
  zoneId: ZoneId;
  status: SensorStatus;
}
