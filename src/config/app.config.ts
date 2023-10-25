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
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'IT Administrator', 'Project Manager'],
  tenantName: 'Team',
  applicationName: 'Emirate Exchange',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage teams', 'Manage projects', 'Manage businesses'],
  getQuoteUrl: 'https://app.roq.ai/proposal/3cdaae21-d535-42d7-b3f8-cd8f658f4e08',
};
