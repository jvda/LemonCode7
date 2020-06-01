import { MemberEntity, createDefaultMemberEntity } from './member.vm';
import parse from "parse-link-header";

export interface responseSearchPag {
  members: MemberEntity[],
  next: number,
  last: number
}

export const getAllMembersByPage = (organizationName: string, page: number, perPage: number): Promise<responseSearchPag> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members?page=${page}&per_page=${perPage}`;
  let next: number = undefined;
  let last: number = undefined;

  return fetch(gitHubMembersUrl)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        let parsed = parse(response.headers.get('Link'));
        next = parsed.next == undefined ? undefined : parseInt(parsed.next.page);
        last = parsed.last == undefined ? undefined : parseInt(parsed.last.page);
        return Promise.resolve(response);
      } else {
        let error = new Error(response.statusText);
        throw error;
      }
    })
    .then((response: Response): any => response.json())
    .then(
      (data: any): Promise<responseSearchPag> => {
        const members: responseSearchPag = {
          members: data.map((gitHubMember) => {
            var member: MemberEntity = createDefaultMemberEntity();

            member.id = gitHubMember.id;
            member.login = gitHubMember.login;
            member.avatar_url = gitHubMember.avatar_url;

            return member;
          }),
          next: next,
          last: last
        };

        return Promise.resolve(members);
      }
    )
}

class MemberAPI {

  // Just return a copy of the mock data
  getAllMembers(organizationName: string): Promise<MemberEntity[]> {
    const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => this.resolveMembers(data))
  }

  getAllMembersByPage(organizationName: string, page: number, perPage: number): Promise<MemberEntity[]> {
    const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members?page=${page}&per_page=${perPage}`;

    return fetch(gitHubMembersUrl)
      .then((response) => {
        console.log(response.headers.get('Link'));
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        } else {
          let error = new Error(response.statusText);
          throw error;
        }
      })
      .then((response: Response): any => response.json())
      .then(
        (data: any): Promise<MemberEntity[]> => {
          const members = data.map((gitHubMember) => {
            var member: MemberEntity = createDefaultMemberEntity();

            member.id = gitHubMember.id;
            member.login = gitHubMember.login;
            member.avatar_url = gitHubMember.avatar_url;

            return member;
          });

          return Promise.resolve(members);
        }
      )
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  private resolveMembers(data: any): Promise<MemberEntity[]> {

    const members = data.map((gitHubMember) => {
      var member: MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });


    return Promise.resolve(members);
  }
}

export const memberAPI = new MemberAPI();
