class SignInResponse {
  final String? responseCode;
  final String? message;
  final SignInContent? content;

  SignInResponse({this.responseCode, this.message, this.content});

  factory SignInResponse.fromJson(Map<String, dynamic> json) {
    return SignInResponse(
      responseCode: json['response_code']?.toString(),
      message: json['message']?.toString(),
      content: json['content'] != null && json['content'] is Map
          ? SignInContent.fromJson(json['content'])
          : null,
    );
  }
}

class SignInContent {
  final String? token;
  final int? isActive;

  SignInContent({this.token, this.isActive});

  factory SignInContent.fromJson(Map<String, dynamic> json) {
    return SignInContent(
      token: json['token']?.toString(),
      isActive: int.tryParse(json['is_active']?.toString() ?? '0'),
    );
  }
}