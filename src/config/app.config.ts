interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Viewer'],
  tenantName: 'Team',
  applicationName: 'Tasky8',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage tasks', 'Manage lists', 'Manage users', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4ffd88ed-e74e-45da-909a-044dd6f9ab38',
};
