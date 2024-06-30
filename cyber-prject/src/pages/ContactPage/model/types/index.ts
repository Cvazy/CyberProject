export interface ContactType {
  title: string;
  value: string;
}

export interface DocumentType {
  title: string;
  value: string;
}

export interface NetworkType {
  title: string;
  contact: string;
  icon: string;
}

export interface ContactsPageState {
  contactsData: ContactType[];
  documentsData: DocumentType[];
  networksData: NetworkType[];
  isLoadingContacts: boolean;
  isLoadingDocuments: boolean;
  isLoadingNetworks: boolean;
  errorContacts?: string;
  errorDocuments?: string;
  errorNetworks?: string;
}
